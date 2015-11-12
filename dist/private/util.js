"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","msl/dist/Promise","./Logger"],(exports,_boot,Promise_0,Logger_1)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(Promise_0),$done=_ms.get(_$0,"$done"),Logger=_ms.getDefaultExport(Logger_1);
	let $done_45with_45beep=exports["$done-with-beep"]=function $done_45with_45beep(promise){
		return promise.catch(err=>{
			return (()=>{
				try {
					return $done(new (Logger)({
						sound:true
					})["$log-error!"](err))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvdXRpbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQUlBLG1EQUFrQiw2QkFBQTtTQUVqQixjQUFlO1VBRVI7UUFDRjtZQUFGLE1BQVEsS0FBSSxRQUFPO1lBQVE7S0FBQSxrQkFBbUI7SUFBQSxTQUMvQztZQUNDLGNBQWU7Ozs7O0NBRW5CLCtDQUFnQiwyQkFBQTtTQUNmLG9CQUFnQjtDQUFBIiwiZmlsZSI6InByaXZhdGUvdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRtc2wuZGlzdC5Qcm9taXNlICRkb25lXG5cdC5Mb2dnZXJcblxuJGRvbmUtd2l0aC1iZWVwLiB8cHJvbWlzZVxuXHR8IENvbXBsYWlucyBhYm91dCBhbnkgZXJyb3JzIGJ5IGJlZXBpbmcuXG5cdHByb21pc2UuY2F0Y2ggfGVyclxuXHRcdGV4Y2VwdFxuXHRcdFx0dHJ5XG5cdFx0XHRcdCRkb25lICgobmV3IExvZ2dlciAoc291bmQuIHRydWUpKS4kbG9nLWVycm9yISBlcnIpXG5cdFx0XHRjYXRjaFxuXHRcdFx0XHRjb25zb2xlLmVycm9yIF8uc3RhY2tcblxuJGRvLXdpdGgtYmVlcC4gfGZ1bmNcblx0JGRvbmUtd2l0aC1iZWVwIGZ1bmMoKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
