import {join} from 'path'
import {exists} from './fs-util'

/**
Stores options from taken from package.json.
See descriptions [here](//dum-build.org/config).
*/
export default class Options {
	static async new(packageDir) {
		const packageConfig = require(join(packageDir, 'package.json'))
		const config = packageConfig.dum || {}

		const opts = applyDefaults(config, {
			inDir: null,
			outDir: null,
			port: 8000,
			bower: null,
			opts: {},
			sound: true
		})

		const defaultBower = {inDir: 'bower_components', outDir: 'lib'}
		if (opts.bower === null) {
			if (await exists(join(packageDir, 'bower_components')))
				opts.bower = defaultBower
		} else
			opts.bower = applyDefaults(opts.bower, defaultBower)
		await applyInOutDefaults(opts, packageDir)

		return new Options(Object.assign({config, packageDir, packageConfig}, opts))
	}

	/** @private */
	constructor(values) {
		Object.assign(this, values)
	}
}

async function applyInOutDefaults(opts, packageDir) {
	if (opts.inDir !== null) {
		if (opts.outDir !== null)
			throw new Error('Must define `outDir` if `inDir` is defined.')
	} else if (opts.outDir !== null)
		throw new Error('Must define `inDir` if `outDir` is defined.')
	else if (await exists(join(packageDir, 'assets'))) {
		opts.inDir = 'assets'
		opts.outDir = 'public'
	} else if (await exists(join(packageDir, 'src'))) {
		opts.inDir = 'src'
		opts.outDir = 'lib'
	} else
		throw new Error(
			'Dum config does not have `inDir`, and neither `assets` nor `src` directories exist.')
}

function applyDefaults(provided, defaults) {
	const out = {}
	for (const key in provided) {
		if (!(key in defaults))
			throw new Error(`No such option ${key}`)
		out[key] = provided[key]
	}
	for (const key in defaults)
		if (!(key in out)) {
			if (defaults[key] === undefined)
				throw new Error(`Option ${key} must be provided.`)
			out[key] = defaults[key]
		}
	return out
}
