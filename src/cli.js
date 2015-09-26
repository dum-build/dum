import argh from 'argh'
import {env, exit} from 'process'
import {promiseDone} from './private/util'
import Dum from './index'

/** Runs dum using the current pwd. */
export default function() {
	promiseDone(go())
}

const methods = new Set(['build', 'watch', 'serve'])

async function go() {
	const args = argh.argv
	const dum = await Dum.new(env.PWD)

	if (!args.argv)
		usage()
	else {
		const method = args.argv[0]
		if (methods.has(method))
			await dum[method]()
		else
			usage()
	}
}

const usage = () => {
	console.error(`Usage: dum (${Array(...methods).join('|')})`)
	exit(1)
}
