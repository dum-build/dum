import {copyAsync, emptyDirAsync, mkdirsAsync, removeAsync} from 'fs-extra-promise'
import {createServer} from 'http-server'
import watch from 'node-watch'
import {basename, join, relative} from 'path'
import Dependencies from './private/Dependencies'
import {exists, fileKind, traverseTree} from './private/fs-util'
import Options from './private/Options'
import Paths from './private/Paths'
import Transformers from './private/Transformers'
import {promiseDone} from './private/util'
import Logger from './private/Logger'

export default class Dum {
	/**
	Creates a new Dum instance for the given package.
	This loads options from the `package.json` there.
	*/
	static async new(packageDir) {
		return new Dum(await Options.new(packageDir))
	}

	/** @private */
	constructor(options) {
		this._options = options
		this._transformers = new Transformers(options)
		this._logger = new Logger(options)
		this._dependencies = new Dependencies
	}

	/** Transforms `inDir` to `outDir` and copies `bower.inDir` to `bower.outDir`. */
	async build() {
		const {inDir, outDir, packageDir, bower} = this._options

		this._logger.logBuild(inDir, outDir)
		await emptyDirAsync(outDir)
		const tree = this._writeSubtree('')

		if (bower) {
			const bowerDir = join(packageDir, bower.inDir)
			const fullOutPath = join(outDir, bower.outDir)
			this._logger.logBower(bower.inDir, bower.outDir)
			await Promise.all([tree, copyAsync(bowerDir, join(packageDir, fullOutPath))])
		} else
			await tree
	}

	/**
	Serve the contents of the `outDir`.
	Unlike `dum serve`, this does *not* build and watch.
	@return An [HttpServer](https://github.com/indexzero/http-server)
	*/
	async serve() {
		await this.watch()
		const {outDir, port} = this._options
		this._logger.logServe(outDir, port)
		return createServer({root: outDir}).listen(port)
	}

	/**
	Continually build in response to changes to the `inDir`.

	There's currently no way to turn off the watching.
	If you know of a better watch module tell me!
	*/
	async watch() {
		await this.build()
		const {inDir, outDir} = this._options
		this._logger.logWatch(inDir, outDir)
		watch(inDir, fullInPath => {
			const relInPath = relative(inDir, fullInPath)
			if (this._shouldBuildFile(relInPath))
				promiseDone(this._handleWatched(this._paths(relInPath)))
			else
				promiseDone(Promise.all(
					(for (path of this._dependencies.getDependers(relInPath))
						this._handleDepender(this._paths(path), relInPath))))
		})
	}

	_writeSubtree(relInDir) {
		const paths = _ =>
			this._paths(join(relInDir, _))
		return traverseTree(join(this._options.inDir, relInDir), {
			filter: _ =>
				this._shouldBuildFile(_),
			traverseDir: _ =>
				// This makes sure empty dirs get copied over too.
				mkdirsAsync(paths(_).fullOutPath),
			traverseFile: _ =>
				this._writeSingle(paths(_))
		})
	}

	async _writeSingle(paths) {
		let dependencies
		try {
			dependencies = await this._transformers.transform(paths)
		} catch (error) {
			this._logger.logError(error)
		}
		if (dependencies !== undefined && dependencies.length > 0) {
			const relDependencies = (for (_ of dependencies) relative(this._options.inDir, _))
			this._dependencies.addDepender(paths.relInPath, relDependencies)
		}
	}

	async _handleWatched(paths) {
		const kind = await fileKind(paths.fullInPath)
		switch (kind) {
			case 'none':
				this._logger.logDelete(paths)
				this._dependencies.deleteDepender(paths.relInPath)
				removeAsync(paths.fullOutPath)
				break
			case 'directory':
				this._logger.logWrite(paths)
				await this._writeSubtree(paths.relInPath)
				break
			case 'file':
				this._logger.logWrite(paths)
				await this._writeSingle(paths)
				break
			default: throw new Error(kind)
		}
	}

	async _handleDepender(paths, dependencyPath) {
		// Need an existence check because it could have been deleted in the meantime.
		if (await exists(paths.fullInPath)) {
			this._logger.logDependency(paths, dependencyPath)
			await this._writeSingle(paths)
		}
	}

	_shouldBuildFile(inFilePath) {
		return !basename(inFilePath).startsWith('_')
	}

	_paths(relInPath) {
		return new Paths(this._transformers, this._options.inDir, this._options.outDir, relInPath)
	}
}
