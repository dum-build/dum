import
	msl.dist.Promise $done
	.Logger

$done-with-beep. |promise
	| Complains about any errors by beeping.
	promise.catch |err
		except
			try
				$done ((new Logger (sound. true)).$log-error! err)
			catch
				console.error _.stack

$do-with-beep. |func
	$done-with-beep func()
