import
	global require
	msl.lib.control opr
	msl.lib.Object property?
	path join
	.fs-util $path-exists?

Options. class
	| Stores options from taken from package.json.
	| See descriptions [here](//dum-build.org/config).

	static
		$new $\package-dir
			package-config = require (join package-dir "package.json")
			config = opr package-config.dum ~(new Object)
			opts = apply-defaults config
				in-dir. null
				out-dir. null
				port. 8000
				bower. null
				opts. new Object
				sound. true

			default-bower = {in-dir. 'bower_components out-dir. 'lib}
			opts.?bower := case opts.bower
				not null?_
					?some apply-defaults _ default-bower
				$ $path-exists? (join package-dir 'bower_components)
					?some default-bower
				else
					?None

			$ $apply-in-out-defaults! opts package-dir

			todo SYNTAX (config. package-dir. package-config.)
			x =
				config.
				package-dir.
				package-config.
			new Options (Object.assign x opts)

	construct values
		Object.assign this values

$apply-in-out-defaults!. $!\opts package-dir
	case
		not null? opts.in-dir
			if null? opts.out-dir
				throw "Must define `out-dir` if `in-dir` is defined."
		not null? opts.out-dir
			throw "Must define `in-dir` if `out-dir` is defined."
		$ $path-exists? (join package-dir 'assets)
			opts.in-dir := 'assets
			opts.out-dir := 'public
		$ $path-exists? (join package-dir 'src)
			opts.in-dir := 'src
			opts.out-dir := 'lib
		else
			throw "Dum config does not have `in-dir`, and neither `assets` nor `src` directories exist."

todo move to msl
apply-defaults. \provided defaults
	with new Object as o
		for key of Object.keys provided
			assert property? defaults key throw "No such option #key."
			o."#key" := provided."#key"

		for key of Object.keys defaults
			unless property? o key
				assert defined? defaults."#key" throw "Option #key must be provided."
				o."#key" := defaults."#key"
