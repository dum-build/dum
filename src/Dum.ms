import
	fs-extra-promise copyAsync emptyDirAsync mkdirsAsync removeAsync
	http-server createServer
	node-watch
	path basename join relative
	.private.Dependencies
	.private.fs-util $path-exists? $path-kind $traverse-dir-tree!
	.private.Logger
	.private.Options
	.private.Paths
	.private.Transformers
	.private.util $done-with-beep

todo SYNTAX Shouldn't have to explicitly assign to `Dum`
Dum. class
	static
		$new $\package-dir
			| Creates a new Dum instance for the given package.
			| This loads options from the `package.json` there.
			new Dum $ Options.$new package-dir

	construct .options
		.transformers := new Transformers .options
		.logger := new Logger .options
		.dependencies := new Dependencies

	$build $!\
		| Transforms `in-dir` to `out-dir` and copies `bower.in-dir` to `bower.out-dir`.
		{in-dir out-dir package-dir ?bower} = .options
		.logger.log-build! in-dir out-dir
		$ emptyDirAsync out-dir
		$tree = .$write-subtree ""
		$ ?-cond ?bower $tree \_
			bower-dir = join package-dir _.in-dir
			full-out-path = join out-dir _.out-dir
			.logger.log-bower! _.in-dir _.out-dir
			$bower-copy = copyAsync bower-dir (join package-dir full-out-path)
			Promise.all [$tree $bower-copy]

	$watch $!\
		| Continually build in response to changes to `in-dir`.
		| There's currently no way to turn it off. If you know of a better watch package, tell me!
		$ .$build()
		{in-dir out-dir} = .options
		.logger.log-watch! in-dir out-dir
		node-watch in-dir \full-in-path
			rel-in-path = relative in-dir full-in-path
			$done-with-beep case
				.should-build-file? rel-in-path
					.$handle-watched! (.paths rel-in-path)
				else
					Promise.all @for path of .dependencies.dependers rel-in-path
						.$handle-depender! (.paths path) rel-in-path

	$serve $\
		| Serve the contents of `out-dir.
		| return: An [HttpServer](https://github.com/indexzero/http-server)
		$ .$watch()
		{out-dir port} = .options
		.logger.log-serve! out-dir port
		(createServer {root. out-dir}).listen port

	my $write-subtree $!\rel-in-dir
		paths = &(.paths (join rel-in-dir _))
		$ $traverse-dir-tree! (join .options.in-dir rel-in-dir)
			traverse?. .&should-build-file?
			|| This makes sure empty dirs get copied over too.
			$traverse-dir!. &(mkdirsAsync paths_.full-out-path)
			$traverse-file!. &(.$write-single! paths_)

	my $write-single! $!\paths
		except
			try
				dependencies = $ .transformers.$transform! paths
			catch
				$ .logger.$log-error! _
			else
				.dependencies.+depender! paths.rel-in-path @for dependencies
					relative .options.in-dir _

	my $handle-watched! $!\paths
		switch $ $path-kind paths.full-in-path
			'none
				.logger.log-delete! paths
				.dependencies.-depender! paths.rel-in-path
				$ removeAsync paths.full-out-path
			'directory
				.logger.log-write! paths
				$ .$write-subtree paths.rel-in-path
			'file
				.logger.log-write! paths
				$ .$write-single! paths

	my $handle-depender! $!\paths dependency-path
		|| Need to check for existence because it could have been deleted in the meantime.
		if $ $path-exists? paths.full-in-path
			.logger.log-dependency! paths dependency-path
			$ .$write-single! paths

	my should-build-file? \in-file-path
		not (basename in-file-path).startsWith '_

	my paths \rel-in-path
		new Paths .transformers .options.in-dir .options.out-dir rel-in-path
