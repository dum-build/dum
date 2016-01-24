import
	path join parse

Paths. class
	| Holds path information for transforming of a single file.
	| .rel-in-path: Input file relative to in-dir.
	| .full-in-path: Absolute path to input file.
	| .in-extension: Extension of input file.
	| .rel-out-path: Output file relative to out-dir.
	| .full-out-path: Absolute path to output file.

	construct transformers in-dir out-dir .rel-in-path
		.full-in-path := join in-dir rel-in-path

		todo [dir. name.] = parse rel-in-path
		p = parse rel-in-path
		.in-extension := p.ext

		out-name = ?-cond (transformers.?out-extension .in-extension) p.name \ext
			"#(p.name).#ext"
		.rel-out-path := mangle-path (join p.dir out-name)
		.full-out-path := join out-dir .rel-out-path

mangle-path = \path
	| Mangle path so it can be used as a URL.
	replacements =
		'! -> 'bang
		'@ -> 'at
		"\\?" -> 'q
		"\\$" -> 'cash
	for replacements
		todo SYNTAX Array destructure
		path := path.replace (new RegExp _[0] 'g) _[1]
	path
