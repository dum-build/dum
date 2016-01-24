"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","msl/lib/control","msl/lib/Object","path","./fs-util","msl/lib/js","msl/lib/at/q"],(exports,_boot,control_0,Object_1,path_2,fs_45util_3,js_4,_63_5)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(control_0),opr=_ms.get(_$0,"opr"),_$1=_ms.getModule(Object_1),property_63=_ms.get(_$1,"property?"),_$2=_ms.getModule(path_2),join=_ms.get(_$2,"join"),_$3=_ms.getModule(fs_45util_3),$path_45exists_63=_ms.get(_$3,"$path-exists?"),_$4=_ms.getModule(js_4),null_63=_ms.get(_$4,"null?"),defined_63=_ms.get(_$4,"defined?"),_$5=_ms.getModule(_63_5),_63some=_ms.get(_$5,"?some"),_63None=_ms.get(_$5,"?None");
	let Options=exports.default=class Options{
		static $new(package_45dir){
			let _this=this;
			return _ms.async(function*(){
				let package_45config=require(join(package_45dir,`package.json`));
				let config=opr(package_45config.dum,_ms.lazy(()=>new (Object)()));
				let opts=apply_45defaults(config,(yield* function*(){
					let built={};
					let in_45dir=built["in-dir"]=null;
					let out_45dir=built["out-dir"]=null;
					let port=built.port=8000;
					let bower=built.bower=null;
					let opts=built.opts=new (Object)();
					let sound=built.sound=true;
					return built
				}()));
				let default_45bower={
					"in-dir":"bower_components",
					"out-dir":"lib"
				};
				opts["?bower"]=(yield* function*(){
					let _=opts.bower;
					if(! null_63(_)){
						return _63some(apply_45defaults,_,default_45bower)
					} else if((yield $path_45exists_63(join(package_45dir,"bower_components")))){
						return _63some(default_45bower)
					} else {
						return _63None
					}
				}());
				(yield $apply_45in_45out_45defaults_33(opts,package_45dir));
				let x=(yield* function*(){
					let built={};
					built.config=config;
					built["package-dir"]=package_45dir;
					built["package-config"]=package_45config;
					return built
				}());
				return new (Options)(Object.assign(x,opts))
			})
		}
		constructor(values){
			let _this=this;
			Object.assign(_this,values)
		}
	};
	let $apply_45in_45out_45defaults_33=exports["$apply-in-out-defaults!"]=function $apply_45in_45out_45defaults_33(opts,package_45dir){
		return _ms.async(function*(){
			if(! null_63(opts["in-dir"])){
				if(null_63(opts["out-dir"])){
					throw new (Error)(`Must define \`out-dir\` if \`in-dir\` is defined.`)
				}
			} else if(! null_63(opts["out-dir"])){
				throw new (Error)(`Must define \`in-dir\` if \`out-dir\` is defined.`)
			} else if((yield $path_45exists_63(join(package_45dir,"assets")))){
				opts["in-dir"]="assets";
				opts["out-dir"]="public"
			} else if((yield $path_45exists_63(join(package_45dir,"src")))){
				opts["in-dir"]="src";
				opts["out-dir"]="lib"
			} else {
				throw new (Error)(`Dum config does not have \`in-dir\`, and neither \`assets\` nor \`src\` directories exist.`)
			}
		})
	};
	let apply_45defaults=exports["apply-defaults"]=function apply_45defaults(provided,defaults){
		return (()=>{
			let o=new (Object)();
			for(let key of Object.keys(provided)){
				if(! property_63(defaults,key))throw new (Error)(`No such option ${key}.`);
				o[`${key}`]=provided[`${key}`]
			};
			for(let key of Object.keys(defaults)){
				if(! property_63(o,key)){
					if(! defined_63(defaults[`${key}`]))throw new (Error)(`Option ${key} must be provided.`);
					o[`${key}`]=defaults[`${key}`]
				}
			};
			return o
		})()
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvT3B0aW9ucy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQU9BLDRCQUNjO0VBSVosWUFBTzs7K0JBQ1c7SUFBakIscUJBQWlCLFFBQVMsS0FBSyxjQUFhO0lBQzVDLFdBQVMsSUFBSSxrQ0FBcUIsS0FBSTtJQUN0QyxTQUFPLGlCQUFlLE9BQ00sbUJBQUE7O0tBQTNCLDZCQUFRO0tBQ1IsK0JBQVM7S0FDVCxvQkFBTTtLQUNOLHNCQUFPO0tBQ1Asb0JBQU0sS0FBSTtLQUNWLHNCQUFPOzs7SUFFUixvQkFBZ0I7Y0FBVTtlQUEyQjtJQUFBO0lBQ3JELGVBQW9CO0tBQUksTUFBSjtLQUNuQixHQUFBLEVBQUksUUFBTSxHQUNBO2FBQVQsUUFBTSxpQkFBZ0IsRUFBQztLQUFBLE9BQ3hCLEdBQUEsT0FBRSxrQkFBZSxLQUFLLGNBQWEsc0JBQ2lCO2FBQW5ELFFBQU07S0FBQSxPQUVIO2FBQUg7S0FBQTtJQUFBO1dBRUEsZ0NBQXdCLEtBQUs7SUFHL0IsTUFDRyxtQkFBQTs7a0JBQUY7MEJBQ0E7NkJBQ0E7OztXQUNELEtBQUksU0FBUyxjQUFjLEVBQUU7R0FBQTtFQUFBO0VBRXJCLFlBQUEsT0FDTTs7R0FBZixjQUFjLE1BQUs7RUFBQTtDQUFBO0NBRXJCLHVFQUE0Qix5Q0FBQSxLQUFLOzhCQUNXO0dBQ3ZDLEdBQUgsRUFBSSxRQUFNLGdCQUNXO0lBQWpCLEdBQUEsUUFBTSxpQkFDWTtLQUFwQixrQkFBTzs7VUFDVCxHQUFBLEVBQUksUUFBTSxpQkFDWTtJQUFyQixrQkFBTztVQUNSLEdBQUEsT0FBRSxrQkFBZSxLQUFLLGNBQWEsWUFDTztJQUF6QyxlQUFnQjtJQUNoQixnQkFBaUI7R0FBQSxPQUNsQixHQUFBLE9BQUUsa0JBQWUsS0FBSyxjQUFhLFNBQ0k7SUFBdEMsZUFBZ0I7SUFDaEIsZ0JBQWlCO0dBQUEsT0FFZDtJQUFILGtCQUFPOzs7O0NBR1YsK0NBQWlCLDBCQUFBLFNBQVMsU0FDUTtTQUE1QixLQUNlO1NBRGYsS0FBSTtHQUNKLFFBQUEsT0FBTyxZQUFZLFVBQ1E7SUFBdkIsS0FBQSxZQUFVLFNBQVMsdUJBQVcsa0JBQWdCO0lBQ3JELEVBQUcsR0FBQyxPQUFRLFNBQVUsR0FBQzs7R0FFcEIsUUFBQSxPQUFPLFlBQVksVUFDUTtJQUF2QixLQUFBLFlBQVUsRUFBRSxLQUNHO0tBQWQsS0FBQSxXQUFTLFNBQVUsR0FBQywwQkFBWSxVQUFRO0tBQy9DLEVBQUcsR0FBQyxPQUFRLFNBQVUsR0FBQyIsImZpbGUiOiJwcml2YXRlL09wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0Z2xvYmFsIHJlcXVpcmVcblx0bXNsLmxpYi5jb250cm9sIG9wclxuXHRtc2wubGliLk9iamVjdCBwcm9wZXJ0eT9cblx0cGF0aCBqb2luXG5cdC5mcy11dGlsICRwYXRoLWV4aXN0cz9cblxuT3B0aW9ucy4gY2xhc3Ncblx0fCBTdG9yZXMgb3B0aW9ucyBmcm9tIHRha2VuIGZyb20gcGFja2FnZS5qc29uLlxuXHR8IFNlZSBkZXNjcmlwdGlvbnMgW2hlcmVdKC8vZHVtLWJ1aWxkLm9yZy9jb25maWcpLlxuXG5cdHN0YXRpY1xuXHRcdCRuZXcgJFxccGFja2FnZS1kaXJcblx0XHRcdHBhY2thZ2UtY29uZmlnID0gcmVxdWlyZSAoam9pbiBwYWNrYWdlLWRpciBcInBhY2thZ2UuanNvblwiKVxuXHRcdFx0Y29uZmlnID0gb3ByIHBhY2thZ2UtY29uZmlnLmR1bSB+KG5ldyBPYmplY3QpXG5cdFx0XHRvcHRzID0gYXBwbHktZGVmYXVsdHMgY29uZmlnXG5cdFx0XHRcdGluLWRpci4gbnVsbFxuXHRcdFx0XHRvdXQtZGlyLiBudWxsXG5cdFx0XHRcdHBvcnQuIDgwMDBcblx0XHRcdFx0Ym93ZXIuIG51bGxcblx0XHRcdFx0b3B0cy4gbmV3IE9iamVjdFxuXHRcdFx0XHRzb3VuZC4gdHJ1ZVxuXG5cdFx0XHRkZWZhdWx0LWJvd2VyID0ge2luLWRpci4gJ2Jvd2VyX2NvbXBvbmVudHMgb3V0LWRpci4gJ2xpYn1cblx0XHRcdG9wdHMuP2Jvd2VyIDo9IGNhc2Ugb3B0cy5ib3dlclxuXHRcdFx0XHRub3QgbnVsbD9fXG5cdFx0XHRcdFx0P3NvbWUgYXBwbHktZGVmYXVsdHMgXyBkZWZhdWx0LWJvd2VyXG5cdFx0XHRcdCQgJHBhdGgtZXhpc3RzPyAoam9pbiBwYWNrYWdlLWRpciAnYm93ZXJfY29tcG9uZW50cylcblx0XHRcdFx0XHQ/c29tZSBkZWZhdWx0LWJvd2VyXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQ/Tm9uZVxuXG5cdFx0XHQkICRhcHBseS1pbi1vdXQtZGVmYXVsdHMhIG9wdHMgcGFja2FnZS1kaXJcblxuXHRcdFx0dG9kbyBTWU5UQVggKGNvbmZpZy4gcGFja2FnZS1kaXIuIHBhY2thZ2UtY29uZmlnLilcblx0XHRcdHggPVxuXHRcdFx0XHRjb25maWcuXG5cdFx0XHRcdHBhY2thZ2UtZGlyLlxuXHRcdFx0XHRwYWNrYWdlLWNvbmZpZy5cblx0XHRcdG5ldyBPcHRpb25zIChPYmplY3QuYXNzaWduIHggb3B0cylcblxuXHRjb25zdHJ1Y3QgdmFsdWVzXG5cdFx0T2JqZWN0LmFzc2lnbiB0aGlzIHZhbHVlc1xuXG4kYXBwbHktaW4tb3V0LWRlZmF1bHRzIS4gJCFcXG9wdHMgcGFja2FnZS1kaXJcblx0Y2FzZVxuXHRcdG5vdCBudWxsPyBvcHRzLmluLWRpclxuXHRcdFx0aWYgbnVsbD8gb3B0cy5vdXQtZGlyXG5cdFx0XHRcdHRocm93IFwiTXVzdCBkZWZpbmUgYG91dC1kaXJgIGlmIGBpbi1kaXJgIGlzIGRlZmluZWQuXCJcblx0XHRub3QgbnVsbD8gb3B0cy5vdXQtZGlyXG5cdFx0XHR0aHJvdyBcIk11c3QgZGVmaW5lIGBpbi1kaXJgIGlmIGBvdXQtZGlyYCBpcyBkZWZpbmVkLlwiXG5cdFx0JCAkcGF0aC1leGlzdHM/IChqb2luIHBhY2thZ2UtZGlyICdhc3NldHMpXG5cdFx0XHRvcHRzLmluLWRpciA6PSAnYXNzZXRzXG5cdFx0XHRvcHRzLm91dC1kaXIgOj0gJ3B1YmxpY1xuXHRcdCQgJHBhdGgtZXhpc3RzPyAoam9pbiBwYWNrYWdlLWRpciAnc3JjKVxuXHRcdFx0b3B0cy5pbi1kaXIgOj0gJ3NyY1xuXHRcdFx0b3B0cy5vdXQtZGlyIDo9ICdsaWJcblx0XHRlbHNlXG5cdFx0XHR0aHJvdyBcIkR1bSBjb25maWcgZG9lcyBub3QgaGF2ZSBgaW4tZGlyYCwgYW5kIG5laXRoZXIgYGFzc2V0c2Agbm9yIGBzcmNgIGRpcmVjdG9yaWVzIGV4aXN0LlwiXG5cbnRvZG8gbW92ZSB0byBtc2xcbmFwcGx5LWRlZmF1bHRzLiBcXHByb3ZpZGVkIGRlZmF1bHRzXG5cdHdpdGggbmV3IE9iamVjdCBhcyBvXG5cdFx0Zm9yIGtleSBvZiBPYmplY3Qua2V5cyBwcm92aWRlZFxuXHRcdFx0YXNzZXJ0IHByb3BlcnR5PyBkZWZhdWx0cyBrZXkgdGhyb3cgXCJObyBzdWNoIG9wdGlvbiAja2V5LlwiXG5cdFx0XHRvLlwiI2tleVwiIDo9IHByb3ZpZGVkLlwiI2tleVwiXG5cblx0XHRmb3Iga2V5IG9mIE9iamVjdC5rZXlzIGRlZmF1bHRzXG5cdFx0XHR1bmxlc3MgcHJvcGVydHk/IG8ga2V5XG5cdFx0XHRcdGFzc2VydCBkZWZpbmVkPyBkZWZhdWx0cy5cIiNrZXlcIiB0aHJvdyBcIk9wdGlvbiAja2V5IG11c3QgYmUgcHJvdmlkZWQuXCJcblx0XHRcdFx0by5cIiNrZXlcIiA6PSBkZWZhdWx0cy5cIiNrZXlcIlxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
