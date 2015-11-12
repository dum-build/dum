import
	msl.dist.@.Map.multi-map add-to-@!

class
	| Keeps track of all the files that depend on each dependency.
	| (A dependency is a file whose name starts with `_`.)

	construct
		.-dependency->dependers = new Id-Map
		.-depender->dependencies = new Id-Map

	'dependers |dependency
		| All files that depend on the dependency.
		| dependency: Path relative to `in-dir`
		todo multi map get
		?-or (?get .-dependency->dependers dependency) []

	'+depender! !|depender dependencies
		| Acknowledge the dependencies of a file.
		| depender: Path relative to `in-dir`
		| dependencies: Paths relative to `in-dir`
		.-depender->dependencies[depender] = dependencies
		for dependency of dependencies
			add-to-@! .-dependency->dependers [dependency] Id-Set

	'-depender! !|depender
		| Remove a depender from the map.
		| It won't be returned from `dependers` any more.
		| depender: Path relative to `in-dir`
		todo multi map get
		for dependency of ?-or (?get .-depender->dependencies depender) []
			.-dependency->dependers[dependency].delete depender
		del .-depender->dependencies[depender]
