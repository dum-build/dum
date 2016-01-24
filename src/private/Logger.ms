import
	chalk bold blue cyan dim green red yellow
	machine-that-goes-bing
	pad

arrow = dim '➔
error-header = "\n #(dim '═══) #(bold (red 'ERROR)) #(dim '═══)\n"
style-main = &(bold (blue (pad _ 6)))
style-in = &(yellow (pad _ 30))
style-out = cyan
style-url = green

class
	| Writes output to the console and beeps on error.

	construct .options
		pass

	log-build! !\in-dir out-dir
		console.log "#(style-main 'build) #(.show-dirs in-dir out-dir)"

	log-bower! !\in-dir rel-out-dir
		console.log "#(style-main 'bower) #(.show-dirs in-dir rel-out-dir)"

	log-watch! !\in-dir out-dir
		console.log "#(style-main 'watch) #(.show-dirs in-dir out-dir)"

	log-serve! !\out-dir port
		url = style-url "localhost:#port"
		console.log "#(style-main 'serve) #(style-out out-dir) #(dim 'to) #url"

	log-dependency! !\paths dependency
		changed = dim "(#dependency changed)"
		console.log "#(style-main 'depend) #(.show-paths paths) #changed"

	log-write! !\paths
		console.log "#(style-main 'write) #(.show-paths paths)"

	log-delete! !\paths
		console.log "#(style-main 'delete) #(.show-paths paths)"

	$log-error! $!\_
		if .options.sound
			$ machine-that-goes-bing()
		console.error error-header
		console.error _.stack

	my show-dirs \in-dir out-dir
		"#(style-in in-dir) #arrow #(style-out out-dir)"

	my show-paths \paths
		.show-dirs paths.rel-in-path paths.rel-out-path
