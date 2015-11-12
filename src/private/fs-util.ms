import
	fs-extra-promise isDirectoryAsync readdirAsync statAsync
	path join

$path-exists?. $|path
	| Whether anything exists at the path.
	not =? 'none $ $path-kind path

todo SYNTAX enum for return value
$path-kind. $|path
	| Whether the path is a directory, file, or does not exist.
	except
		try
			stats = $ statAsync path
			cond stats.isDirectory() 'directory 'file
		catch
			assert _.message.startsWith 'ENOENT throw _
			'none

$traverse-dir-tree!. $!|dir-path opts
	| Calls `$traverse-dir!` on every directory and `$traverse-file!` on every file.
	| Avoids a file or directory (and all files in it) when `filter(path)` returns false.
	traverse? $traverse-dir! $traverse-file! = opts
	$recur! = $!|rel-dir
		full-dir-path = join dir-path rel-dir
		contents = $ readdirAsync full-dir-path
		used-contents = cond (defined? traverse?) (@keep contents traverse?) contents
		$for sub-name of used-contents
			full-path = join full-dir-path sub-name
			rel-path = join rel-dir sub-name
			case
				$ isDirectoryAsync full-path
					$ Promise.all
						. $traverse-dir! rel-path
						. $recur! rel-path
				else
					$ $traverse-file! rel-path
	$recur! ""
