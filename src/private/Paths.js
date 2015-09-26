import {join, parse} from 'path'

/** Holds path information relevant to the transformation of a single file. */
export default class Paths {
	constructor(transformers, inDir, outDir, relInPath) {
		/** Input file relative to inDir. */
		this.relInPath = relInPath
		/** Absolute path to input file. */
		this.fullInPath = join(inDir, relInPath)

		const {dir: relInDir, name, ext} = parse(relInPath)
		/** Extension of input file. */
		this.inExtension = ext

		const outExt = transformers.getOutExtension(this.inExtension)

		const outName = outExt ? `${name}.${outExt}` : name
		/** Output file relative to outDir. */
		this.relOutPath = manglePath(join(relInDir, outName))
		/** Absolute path to output file. */
		this.fullOutPath = join(outDir, this.relOutPath)
	}
}

/** Transform paths that can't be directly served over html. */
function manglePath(path) {
	return path.replace(/!/g, 'bang')
	.replace(/@/g, 'at')
	.replace(/\?/g, 'q')
	.replace(/\$/g, 'cash')
}
