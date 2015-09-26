import {isDirectoryAsync, readdirAsync, statAsync} from 'fs-extra-promise'
import {join} from 'path'

/** Whether the file exists. */
export async function exists(path) {
	return (await fileKind(path)) !== 'none'
}

/** Whether the path is a directory, file, or does not exist. */
export async function fileKind(filename) {
	try {
		const stats = await statAsync(filename)
		return stats.isDirectory() ? 'directory' : 'file'
	} catch (err) {
		if (!err.message.startsWith('ENOENT'))
			throw err
		return 'none'
	}
}

/**
Calls `traverseDir` on every directory and `traverseFile` on every file.
Avoids a file or directory (and all files in it) when `filter(path)` returns false.
*/
export function traverseTree(dirPath, {filter, traverseDir, traverseFile}) {
	async function recur(relDir) {
		const fullDirPath = join(dirPath, relDir)
		const contents = await readdirAsync(fullDirPath)
		const usedContents = filter === undefined ? contents : contents.filter(filter)
		return await Promise.all(usedContents.map(async function(name) {
			const fullPath = join(fullDirPath, name)
			const relPath = join(relDir, name)
			if (await isDirectoryAsync(fullPath))
				await Promise.all([traverseDir(relPath), recur(relPath)])
			else
				await traverseFile(relPath)
		}))
	}
	return recur('')
}
