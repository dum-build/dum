import
	fs-extra-promise copyAsync outputFileAsync
	global require
	msl.dist.control opr
	msl.dist.Object property?
	path join
	jstransformer

Transformers. class
	| Keeps track of all jstransformers and can transform any file.

	construct options
		.ext->transformer = create-ext->transformer options

	'?out-extension |in-extension
		| File extension for output file.
		(.choose-transform in-extension).?out-extension

	'$transform! $|:Array[Str] paths
		| Transform input file and write to output file.
		| return: dependencies
		$ (.choose-transform paths.in-extension).$transform! paths.full-in-path paths.full-out-path

	my 'choose-transform |in-extension
		case in-extension
			empty?_
				new Identity-Transform ?None
			else
				assert _.startsWith "." throw
					"Extension should start with `.`. Got: #in-extension"
				ext = _.slice 1
				todo ?get with default
				?-or (?get .ext->transformer ext) ~(new Identity-Transform (?some ext))

|| Object like `jade. (pretty. true)`
create-ext->transformer = |options
	package-config package-dir opts = options
	unused-opts = => Id-Set (Object.keys opts)
	transform-names-with-no-options = []
	with empty Id-Map as ext->transformer
		dependencies = opr package-config.dependencies new Object
		dev-dependencies = opr package-config.devDependencies new Object
		for package-name of ++~ (Object.keys dependencies) (Object.keys dev-dependencies)
			if package-name.startsWith 'jstransformer-
				pkg = require (join package-dir 'node_modules package-name)
				transform = new Real-Transform pkg case pkg.name
					property? opts _
						todo -!
						--! unused-opts [_]
						opts."#(pkg.name)"
					else
						transform-names-with-no-options.push _
						null
				for ext of transform.@in-extensions
					ext->transformer[ext] = transform

		for pkg-name of unused-opts
			throw "
				#pkg-name does not name any known transform.
				You probably meant one of: #(transform-names-with-no-options.join ", ").

Real-Transform = class
	construct transformer .-options
		.-transformer = jstransformer transformer

	get '@in-extensions
		.-transformer.inputFormats

	get '?out-extension
		Opt->? .-transformer.outputFormat

	'$transform! $|full-in-path full-out-path
		locals = filename. full-in-path
		body dependencies = $ .-transformer.renderFileAsync full-in-path .-options locals
		$ outputFileAsync full-out-path body
		?-or (Opt->? dependencies) []

Identity-Transform = class
	| Transform that copies the input.
	| This shouldn't be implemented as a real jstransformer because those work on strings.
	| Doing a plain file copy is more efficient.

	construct .?out-extension
		pass

	'$transform! $|full-in-path full-out-path
		$ copyAsync full-in-path full-out-path
		[]
