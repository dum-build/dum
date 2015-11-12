"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","argh","console","process","./Dum","./private/util","msl/dist/js","msl/dist/at/Set/Id-Set","msl/dist/Type/Type"],(exports,_boot,argh_0,console_1,process_2,Dum_3,util_4,js_5,Id_45Set_6,Type_7)=>{
	_ms.getModule(_boot);
	let argh=_ms.getDefaultExport(argh_0),_$0=_ms.getModule(console_1),error=_ms.get(_$0,"error"),_$1=_ms.getModule(process_2),env=_ms.get(_$1,"env"),exit=_ms.get(_$1,"exit"),Dum=_ms.getDefaultExport(Dum_3),_$2=_ms.getModule(util_4),$do_45with_45beep=_ms.get(_$2,"$do-with-beep"),_$3=_ms.getModule(js_5),defined_63=_ms.get(_$3,"defined?"),Id_45Set=_ms.getDefaultExport(Id_45Set_6),_$4=_ms.getModule(Type_7),_61_62=_ms.get(_$4,"=>");
	let cli=exports.default=function cli(){
		return $do_45with_45beep(function(){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL2NsaS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQU9BLHdCQUNNO1NBQ0wsa0JBQ2lCOztJQUFoQixTQUFPO0lBQ1AsUUFBTSxPQUFFLFNBQVM7SUFFWjtLQUFJLE1BQUo7S0FDSixHQUFBLFdBQVUsR0FDQTtNQUFULGdCQUFPLEVBQUM7TUFDSDtPQUFBLE1BQUE7T0FDSixtQkFBQyxRQUFELEdBQ1E7ZUFBTCxJQUFLLElBQUc7Y0FFUDtRQUFIO09BQUE7TUFBQTtLQUFBLE9BRUM7TUFBSDtLQUFBO0lBQUE7R0FBQTtFQUFBO0NBQUE7Q0FFSixZQUFVLEtBQUksVUFBTyxDQUFFLFFBQU8sUUFBTztDQUVyQyxhQUNXO0VBQVYsTUFBTyxjQUFhLE9BQUcsT0FBTyxRQUFTO0VBQ3ZDLEtBQUs7Q0FBQSIsImZpbGUiOiJjbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0YXJnaFxuXHRjb25zb2xlIGVycm9yXG5cdHByb2Nlc3MgZW52IGV4aXRcblx0LkR1bVxuXHQucHJpdmF0ZS51dGlsICRkby13aXRoLWJlZXBcblxuY2xpLiB8XG5cdHwgUnVucyBkdW0gdXNpbmcgdGhlIGN1cnJlbnQgcHdkLlxuXHQkZG8td2l0aC1iZWVwICQhfFxuXHRcdGFyZ3MgPSBhcmdoLmFyZ3Zcblx0XHRkdW0gPSAkIER1bS4kbmV3IGVudi5QV0RcblxuXHRcdGNhc2UgYXJncy5hcmd2XG5cdFx0XHRkZWZpbmVkPyBfXG5cdFx0XHRcdGFjdCA9IF9bMF1cblx0XHRcdFx0Y2FzZSBhY3Rcblx0XHRcdFx0XHQ6bWV0aG9kc1xuXHRcdFx0XHRcdFx0JCBkdW0uXCIkI19cIigpXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dXNhZ2UhKClcblx0XHRcdGVsc2Vcblx0XHRcdFx0dXNhZ2UhKClcblxubWV0aG9kcyA9IG5ldyBJZC1TZXQgWydidWlsZCAnd2F0Y2ggJ3NlcnZlXVxuXG51c2FnZSEgPSAhfFxuXHRlcnJvciBcIlVzYWdlOiBkdW0gIyg9PiBTdHJpbmcgbWV0aG9kcyBcInxcIilcIlxuXHRleGl0IDFcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
