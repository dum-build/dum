/**
Keeps track of all the files that depend on each dependency.
(A dependency is a file whose name starts with `_`.)
*/
export default class Dependencies {
	constructor() {
		this._dependencyToDependers = new Map()
		this._dependerToDependencies = new Map()
	}

	/**
	All files that depend on the dependency.
	@param dependency Path relative to `inDir`
	*/
	getDependers(dependency) {
		return this._dependencyToDependers.get(dependency) || []
	}

	/**
	Acknowledge the dependencies of a file.
	@param depender Path relative to `inDir`
	@param {string[]} dependencies Paths relative to `inDir`
	*/
	addDepender(depender, dependencies) {
		this._dependerToDependencies.set(depender, dependencies)
		for (const dependency of dependencies) {
			const dependers = this._dependencyToDependers.get(dependency)
			if (dependers === undefined)
				this._dependencyToDependers.set(dependency, new Set([depender]))
			else
				dependers.add(depender)
		}
	}

	/**
	Remove a depender from the map.
	It won't be returned from `getDependers` any more.
	@param depender Path relative to `inDir`
	*/
	deleteDepender(depender) {
		const dependencies = this._dependerToDependencies.get(depender)
		if (dependencies !== undefined) {
			for (const dependency of this._dependerToDependencies.get(depender))
				this._dependencyToDependers.get(dependency).delete(depender)
			this._dependerToDependencies.delete(depender)
		}
	}
}
