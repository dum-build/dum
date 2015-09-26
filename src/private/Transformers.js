import {copyAsync, outputFileAsync} from 'fs-extra-promise'
import {join} from 'path'
import jstransformer from 'jstransformer'

/** Keeps track of all jstransformers and can transform any file. */
export default class Transformers {
	constructor(options) {
		const dependencies = options.packageConfig.dependencies
		const devDependencies = options.packageConfig.devDependencies

		// Object like {jade: {pretty: true}}
		const transformOptions = options.opts
		const unusedTransformOptions = new Set(Object.keys(transformOptions))
		const transformNamesWithNoOptions = []

		this._extToTransformer = new Map()

		const maybeAddTransformer = packageName => {
			if (packageName.startsWith('jstransformer-')) {
				const pkg = require(join(options.packageDir, 'node_modules', packageName))
				const {name} = pkg

				let opts = null
				if (name in transformOptions) {
					opts = transformOptions[name]
					unusedTransformOptions.delete(name)
				} else
					transformNamesWithNoOptions.push(name)

				const transform = new RealTransform(pkg, opts)
				for (const ext of transform.inExtensions())
					this._extToTransformer.set(ext, transform)
			}
		}

		for (const _ in dependencies)
			maybeAddTransformer(_)
		for (const _ in devDependencies)
			maybeAddTransformer(_)

		for (const name of unusedTransformOptions)
			throw new Error(
				`${JSON.stringify(name)} does not name any known transform.\n` +
				`You probably meant one of: ${transformNamesWithNoOptions.join(', ')}.`)
	}

	/** Get file extension for output file. */
	getOutExtension(inExtension) {
		return this._chooseTransform(inExtension).outExtension()
	}

	/** Write input file to output file. */
	async transform({inExtension, fullInPath, fullOutPath}) {
		return await this._chooseTransform(inExtension).transform(fullInPath, fullOutPath)
	}

	_chooseTransform(inExtension) {
		if (inExtension === '')
			return new IdentityTransform('')
		else {
			if (!inExtension.startsWith('.'))
				throw new Error(`Extension should start with '.'. Got: '${inExtension}'`)
			inExtension = inExtension.slice(1)
			const transform = this._extToTransformer.get(inExtension)
			return transform === undefined ? new IdentityTransform(inExtension) : transform
		}
	}
}

class Transform {}

class RealTransform extends Transform {
	constructor(transformer, transformOptions) {
		super()
		this._transformer = jstransformer(transformer)
		this._options = transformOptions
	}

	inExtensions() {
		return this._transformer.inputFormats
	}

	outExtension() {
		return this._transformer.outputFormat
	}

	async transform(fullInPath, fullOutPath) {
		const locals = {filename: fullInPath}
		let {body, dependencies} =
			await this._transformer.renderFileAsync(fullInPath, this._options, locals)
		if (dependencies === undefined)
			dependencies = []
		await outputFileAsync(fullOutPath, body)
		return dependencies
	}
}

/**
Transformer that changes nothing about the input.
This can't be implemented as a "real" jstransformer because those output strings.
Doing a plain file copy instead is more efficient for large files.
*/
class IdentityTransform extends Transform {
	constructor(inExtension) {
		super()
		this._inExtension = inExtension
	}

	outExtension() {
		return this._inExtension
	}

	async transform(fullInPath, fullOutPath) {
		return await copyAsync(fullInPath, fullOutPath)
	}
}
