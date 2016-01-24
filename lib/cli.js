"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","argh","console","process","./Dum","./private/util","msl/lib/js","msl/lib/at/Set/Id-Set","msl/lib/Type/Type"],(exports,_boot,argh_0,console_1,process_2,Dum_3,util_4,js_5,Id_45Set_6,Type_7)=>{
	_ms.getModule(_boot);
	let argh=_ms.getDefaultExport(argh_0),_$0=_ms.getModule(console_1),error=_ms.get(_$0,"error"),_$1=_ms.getModule(process_2),env=_ms.get(_$1,"env"),exit=_ms.get(_$1,"exit"),Dum=_ms.getDefaultExport(Dum_3),_$2=_ms.getModule(util_4),$do_45with_45beep=_ms.get(_$2,"$do-with-beep"),_$3=_ms.getModule(js_5),defined_63=_ms.get(_$3,"defined?"),Id_45Set=_ms.getDefaultExport(Id_45Set_6),_$4=_ms.getModule(Type_7),_61_62=_ms.get(_$4,"=>");
	let cli=exports.default=function cli(){
		$do_45with_45beep(function(){
			return _ms.async(function*(){
				let args=argh.argv;
				let dum=(yield Dum.$new(env.PWD));
				{
					let _=args.argv;
					if(defined_63(_)){
						let act=_ms.sub(_,0);
						{
							let _=act;
							if(_ms.hasInstance(methods,_)){
								(yield dum[`$${_}`]())
							} else {
								usage_33()
							}
						}
					} else {
						usage_33()
					}
				}
			})
		})
	};
	let methods=new (Id_45Set)(["build","watch","serve"]);
	let usage_33=function usage_33(){
		error(`Usage: dum ${_61_62(String,methods,`|`)}`);
		exit(1)
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL2NsaS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQU9BLHdCQUNPLGNBQUE7RUFDTixrQkFDaUI7K0JBQUE7SUFBaEIsU0FBTztJQUNQLFFBQU0sT0FBRSxTQUFTO0lBRVo7S0FBSSxNQUFKO0tBQ0osR0FBQSxXQUFVLEdBQ0E7TUFBVCxnQkFBTyxFQUFDO01BQ0g7T0FBQSxNQUFBO09BQ0osbUJBQUMsUUFBRCxHQUNRO2VBQUwsSUFBSyxJQUFHO2NBRVA7UUFBSDtPQUFBO01BQUE7S0FBQSxPQUVDO01BQUg7S0FBQTtJQUFBO0dBQUE7RUFBQTtDQUFBO0NBRUosWUFBVSxLQUFJLFVBQU8sQ0FBRSxRQUFPLFFBQU87Q0FFckMsYUFDVyxtQkFBQTtFQUFWLE1BQU8sY0FBYSxPQUFHLE9BQU8sUUFBUztFQUN2QyxLQUFLO0NBQUEiLCJmaWxlIjoiY2xpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0XG5cdGFyZ2hcblx0Y29uc29sZSBlcnJvclxuXHRwcm9jZXNzIGVudiBleGl0XG5cdC5EdW1cblx0LnByaXZhdGUudXRpbCAkZG8td2l0aC1iZWVwXG5cbmNsaS4gIVxcXG5cdHwgUnVucyBkdW0gdXNpbmcgdGhlIGN1cnJlbnQgcHdkLlxuXHQkZG8td2l0aC1iZWVwICQhXFxcblx0XHRhcmdzID0gYXJnaC5hcmd2XG5cdFx0ZHVtID0gJCBEdW0uJG5ldyBlbnYuUFdEXG5cblx0XHRjYXNlIGFyZ3MuYXJndlxuXHRcdFx0ZGVmaW5lZD8gX1xuXHRcdFx0XHRhY3QgPSBfWzBdXG5cdFx0XHRcdGNhc2UgYWN0XG5cdFx0XHRcdFx0Om1ldGhvZHNcblx0XHRcdFx0XHRcdCQgZHVtLlwiJCNfXCIoKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHVzYWdlISgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHVzYWdlISgpXG5cbm1ldGhvZHMgPSBuZXcgSWQtU2V0IFsnYnVpbGQgJ3dhdGNoICdzZXJ2ZV1cblxudXNhZ2UhID0gIVxcXG5cdGVycm9yIFwiVXNhZ2U6IGR1bSAjKD0+IFN0cmluZyBtZXRob2RzIFwifFwiKVwiXG5cdGV4aXQgMVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
