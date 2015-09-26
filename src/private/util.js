import Logger from './Logger'

/**
Complains about any errors in a promise.
Must call this on any promises not returned from a function.
*/
export function promiseDone(promise) {
	promise.catch(error => {
		try {
			new Logger({sound: true}).logError(error)
		} catch (err) {
			console.log(err.stack)
		}
	})
}
