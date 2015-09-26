import {blue, bold, cyan, dim, green, red, yellow} from 'chalk'
import {log, error} from 'console'
import bing from 'machine-that-goes-bing'
import pad from 'pad'

const
	arrow = dim('➔'),
	errorHeader = `\n ${dim('═══')} ${bold(red('ERROR'))} ${dim('═══')}\n`,
	styleMain = _ => bold(blue(_)),
	styleIn = _ => yellow(pad(_, 30)),
	styleOut = cyan,
	styleUrl = green

/** Writes output to the console and makes noises. */
export default class Logger {
	constructor(options) {
		this._options = options
	}

	logBuild(inDir, outDir) {
		log(`${styleMain('build')}  ${this._showDirs(inDir, outDir)}`)
	}

	logBower(inDir, relOutDir) {
		log(`${styleMain('bower')}  ${this._showDirs(inDir, relOutDir)}`)
	}

	logWatch(inDir, outDir) {
		log(`${styleMain('watch')}  ${this._showDirs(inDir, outDir)}`)
	}

	logServe(outDir, port) {
		const url = styleUrl(`localhost:${port}`)
		log(`${styleMain('serve')}  ${styleOut(outDir)} ${dim('to')} ${url}`)
	}

	logDependency(paths, dependency) {
		const changed = dim(`(${dependency} changed)`)
		log(`${styleMain('depend')} ${this._showPaths(paths)} ${changed}`)
	}

	logWrite(paths) {
		log(`${styleMain('write')}  ${this._showPaths(paths)}`)
	}

	logDelete(paths) {
		log(`${styleMain('delete')} ${this._showPaths(paths)}`)
	}

	async logError(err) {
		if (this._options.sound)
			bing().catch(err => { error(err.stack) })
		error(errorHeader)
		error(err.stack)
	}

	_showDirs(_in, out) {
		return `${styleIn(_in)} ${arrow} ${styleOut(out)}`
	}

	_showPaths(paths) {
		return this._showDirs(paths.relInPath, paths.relOutPath)
	}
}
