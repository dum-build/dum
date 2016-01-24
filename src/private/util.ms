import
	msl.lib.Promise $done
	.Logger

$done-with-beep. \promise
	| Complains about any errors by beeping.
	promise.catch \err
		except
			try
				logger = new Logger {sound. true}
				$done (logger.$log-error! err)
			catch
				console.error _.stack

$do-with-beep. \func
	$done-with-beep func()
