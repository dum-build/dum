"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","msl/lib/Promise","./Logger"],(exports,_boot,Promise_0,Logger_1)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(Promise_0),$done=_ms.get(_$0,"$done"),Logger=_ms.getDefaultExport(Logger_1);
	let $done_45with_45beep=exports["$done-with-beep"]=function $done_45with_45beep(promise){
		return promise.catch(err=>{
			return (()=>{
				try {
					let logger=new (Logger)({
						sound:true
					});
					return $done(logger["$log-error!"](err))
				}catch(_){
					return console.error(_.stack)
				}
			})()
		})
	};
	let $do_45with_45beep=exports["$do-with-beep"]=function $do_45with_45beep(func){
		return $done_45with_45beep(func())
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvdXRpbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQUlBLG1EQUFrQiw2QkFBQSxRQUNPO1NBQ3hCLGNBQWUsS0FDRztVQUNYO1FBQ0Y7S0FBRixXQUFTLEtBQUksUUFBTztZQUFRO0tBQUE7WUFDNUIsTUFBTyxzQkFBbUI7SUFBQSxTQUMzQjtZQUNDLGNBQWU7Ozs7O0NBRW5CLCtDQUFnQiwyQkFBQSxLQUNJO1NBQW5CLG9CQUFnQjtDQUFBIiwiZmlsZSI6InByaXZhdGUvdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRtc2wubGliLlByb21pc2UgJGRvbmVcblx0LkxvZ2dlclxuXG4kZG9uZS13aXRoLWJlZXAuIFxccHJvbWlzZVxuXHR8IENvbXBsYWlucyBhYm91dCBhbnkgZXJyb3JzIGJ5IGJlZXBpbmcuXG5cdHByb21pc2UuY2F0Y2ggXFxlcnJcblx0XHRleGNlcHRcblx0XHRcdHRyeVxuXHRcdFx0XHRsb2dnZXIgPSBuZXcgTG9nZ2VyIHtzb3VuZC4gdHJ1ZX1cblx0XHRcdFx0JGRvbmUgKGxvZ2dlci4kbG9nLWVycm9yISBlcnIpXG5cdFx0XHRjYXRjaFxuXHRcdFx0XHRjb25zb2xlLmVycm9yIF8uc3RhY2tcblxuJGRvLXdpdGgtYmVlcC4gXFxmdW5jXG5cdCRkb25lLXdpdGgtYmVlcCBmdW5jKClcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
