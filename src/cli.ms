import
	argh
	console error
	process env exit
	.Dum
	.private.util $do-with-beep

cli. |
	| Runs dum using the current pwd.
	$do-with-beep $!|
		args = argh.argv
		dum = $ Dum.$new env.PWD

		case args.argv
			defined? _
				act = _[0]
				case act
					:methods
						$ dum."$#_"()
					else
						usage!()
			else
				usage!()

methods = new Id-Set ['build 'watch 'serve]

usage! = !|
	error "Usage: dum #(=> String methods "|")"
	exit 1
