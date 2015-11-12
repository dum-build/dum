"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","msl/dist/control","msl/dist/Object","path","./fs-util","msl/dist/js","msl/dist/at/q"],(exports,_boot,control_0,Object_1,path_2,fs_45util_3,js_4,_63_5)=>{
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
					["in-dir"]:"bower_components",
					["out-dir"]:"lib"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvT3B0aW9ucy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQU9BLDRCQUNjO2NBSUo7T0E4Qk07O0lBN0JiLHFCQUFpQixRQUFTLEtBQUssY0FBYTtJQUM1QyxXQUFTLElBQUksa0NBQXFCLEtBQUk7SUFDdEMsU0FBTyxpQkFBZSxPQUNNLG1CQUFBOztLQUEzQiw2QkFBUTtLQUNSLCtCQUFTO0tBQ1Qsb0JBQU07S0FDTixzQkFBTztLQUNQLG9CQUFNLEtBQUk7S0FDVixzQkFBTzs7O0lBRVIsb0JBQWdCO2dCQUFTO2lCQUEyQjtJQUFBO0lBQ3BELGVBQW9CO0tBQUksTUFBSjtLQUNuQixHQUFBLEVBQUksUUFBTSxHQUNBO2FBQVQsUUFBTSxpQkFBZ0IsRUFBQztLQUFBLE9BQ3hCLEdBQUEsT0FBRSxrQkFBZSxLQUFLLGNBQWEsc0JBQ2lCO2FBQW5ELFFBQU07S0FBQSxPQUVIO2FBQUg7S0FBQTtJQUFBO1dBRUEsZ0NBQXdCLEtBQUs7SUFHL0IsTUFDRyxtQkFBQTs7a0JBQUY7MEJBQ0E7NkJBQ0E7OztXQUNELEtBQUksU0FBUyxjQUFjLEVBQUU7R0FBQTtFQUFBO0VBRXJCLFlBQUE7T0FDSztHQUFkLGNBQWMsTUFBSztFQUFBO0NBQUE7Q0FFckIsdUVBQTRCLHlDQUFBLEtBQUs7O0dBRTVCLEdBQUgsRUFBSSxRQUFNLGdCQUNXO0lBQWpCLEdBQUEsUUFBTSxpQkFDWTtLQUFwQixrQkFBTzs7VUFDVCxHQUFBLEVBQUksUUFBTSxpQkFDWTtJQUFyQixrQkFBTztVQUNSLEdBQUEsT0FBRSxrQkFBZSxLQUFLLGNBQWEsWUFDTztJQUF6QyxlQUFnQjtJQUNoQixnQkFBaUI7R0FBQSxPQUNsQixHQUFBLE9BQUUsa0JBQWUsS0FBSyxjQUFhLFNBQ0k7SUFBdEMsZUFBZ0I7SUFDaEIsZ0JBQWlCO0dBQUEsT0FFZDtJQUFILGtCQUFPOzs7O0NBR1YsK0NBQWlCLDBCQUFBLFNBQVM7U0FDcEIsS0FDZTtTQURmLEtBQUk7R0FDSixRQUFBLE9BQU8sWUFBWSxVQUNRO0lBQXZCLEtBQUEsWUFBVSxTQUFTLHVCQUFXLGtCQUFnQjtJQUNyRCxFQUFHLEdBQUMsT0FBUSxTQUFVLEdBQUM7O0dBRXBCLFFBQUEsT0FBTyxZQUFZLFVBQ1E7SUFBdkIsS0FBQSxZQUFVLEVBQUUsS0FDRztLQUFkLEtBQUEsV0FBUyxTQUFVLEdBQUMsMEJBQVksVUFBUTtLQUMvQyxFQUFHLEdBQUMsT0FBUSxTQUFVLEdBQUMiLCJmaWxlIjoicHJpdmF0ZS9PcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0XG5cdGdsb2JhbCByZXF1aXJlXG5cdG1zbC5kaXN0LmNvbnRyb2wgb3ByXG5cdG1zbC5kaXN0Lk9iamVjdCBwcm9wZXJ0eT9cblx0cGF0aCBqb2luXG5cdC5mcy11dGlsICRwYXRoLWV4aXN0cz9cblxuT3B0aW9ucy4gY2xhc3Ncblx0fCBTdG9yZXMgb3B0aW9ucyBmcm9tIHRha2VuIGZyb20gcGFja2FnZS5qc29uLlxuXHR8IFNlZSBkZXNjcmlwdGlvbnMgW2hlcmVdKC8vZHVtLWJ1aWxkLm9yZy9jb25maWcpLlxuXG5cdHN0YXRpY1xuXHRcdCckbmV3ICR8cGFja2FnZS1kaXJcblx0XHRcdHBhY2thZ2UtY29uZmlnID0gcmVxdWlyZSAoam9pbiBwYWNrYWdlLWRpciBcInBhY2thZ2UuanNvblwiKVxuXHRcdFx0Y29uZmlnID0gb3ByIHBhY2thZ2UtY29uZmlnLmR1bSB+KG5ldyBPYmplY3QpXG5cdFx0XHRvcHRzID0gYXBwbHktZGVmYXVsdHMgY29uZmlnXG5cdFx0XHRcdGluLWRpci4gbnVsbFxuXHRcdFx0XHRvdXQtZGlyLiBudWxsXG5cdFx0XHRcdHBvcnQuIDgwMDBcblx0XHRcdFx0Ym93ZXIuIG51bGxcblx0XHRcdFx0b3B0cy4gbmV3IE9iamVjdFxuXHRcdFx0XHRzb3VuZC4gdHJ1ZVxuXG5cdFx0XHRkZWZhdWx0LWJvd2VyID0gaW4tZGlyLiAnYm93ZXJfY29tcG9uZW50cyBvdXQtZGlyLiAnbGliXG5cdFx0XHRvcHRzLj9ib3dlciA6PSBjYXNlIG9wdHMuYm93ZXJcblx0XHRcdFx0bm90IG51bGw/X1xuXHRcdFx0XHRcdD9zb21lIGFwcGx5LWRlZmF1bHRzIF8gZGVmYXVsdC1ib3dlclxuXHRcdFx0XHQkICRwYXRoLWV4aXN0cz8gKGpvaW4gcGFja2FnZS1kaXIgJ2Jvd2VyX2NvbXBvbmVudHMpXG5cdFx0XHRcdFx0P3NvbWUgZGVmYXVsdC1ib3dlclxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0P05vbmVcblxuXHRcdFx0JCAkYXBwbHktaW4tb3V0LWRlZmF1bHRzISBvcHRzIHBhY2thZ2UtZGlyXG5cblx0XHRcdHRvZG8gU1lOVEFYIChjb25maWcuIHBhY2thZ2UtZGlyLiBwYWNrYWdlLWNvbmZpZy4pXG5cdFx0XHR4ID1cblx0XHRcdFx0Y29uZmlnLlxuXHRcdFx0XHRwYWNrYWdlLWRpci5cblx0XHRcdFx0cGFja2FnZS1jb25maWcuXG5cdFx0XHRuZXcgT3B0aW9ucyAoT2JqZWN0LmFzc2lnbiB4IG9wdHMpXG5cblx0Y29uc3RydWN0IHZhbHVlc1xuXHRcdE9iamVjdC5hc3NpZ24gdGhpcyB2YWx1ZXNcblxuJGFwcGx5LWluLW91dC1kZWZhdWx0cyEuICQhfG9wdHMgcGFja2FnZS1kaXJcblx0Y2FzZVxuXHRcdG5vdCBudWxsPyBvcHRzLmluLWRpclxuXHRcdFx0aWYgbnVsbD8gb3B0cy5vdXQtZGlyXG5cdFx0XHRcdHRocm93IFwiTXVzdCBkZWZpbmUgYG91dC1kaXJgIGlmIGBpbi1kaXJgIGlzIGRlZmluZWQuXCJcblx0XHRub3QgbnVsbD8gb3B0cy5vdXQtZGlyXG5cdFx0XHR0aHJvdyBcIk11c3QgZGVmaW5lIGBpbi1kaXJgIGlmIGBvdXQtZGlyYCBpcyBkZWZpbmVkLlwiXG5cdFx0JCAkcGF0aC1leGlzdHM/IChqb2luIHBhY2thZ2UtZGlyICdhc3NldHMpXG5cdFx0XHRvcHRzLmluLWRpciA6PSAnYXNzZXRzXG5cdFx0XHRvcHRzLm91dC1kaXIgOj0gJ3B1YmxpY1xuXHRcdCQgJHBhdGgtZXhpc3RzPyAoam9pbiBwYWNrYWdlLWRpciAnc3JjKVxuXHRcdFx0b3B0cy5pbi1kaXIgOj0gJ3NyY1xuXHRcdFx0b3B0cy5vdXQtZGlyIDo9ICdsaWJcblx0XHRlbHNlXG5cdFx0XHR0aHJvdyBcIkR1bSBjb25maWcgZG9lcyBub3QgaGF2ZSBgaW4tZGlyYCwgYW5kIG5laXRoZXIgYGFzc2V0c2Agbm9yIGBzcmNgIGRpcmVjdG9yaWVzIGV4aXN0LlwiXG5cbnRvZG8gbW92ZSB0byBtc2xcbmFwcGx5LWRlZmF1bHRzLiB8cHJvdmlkZWQgZGVmYXVsdHNcblx0d2l0aCBuZXcgT2JqZWN0IGFzIG9cblx0XHRmb3Iga2V5IG9mIE9iamVjdC5rZXlzIHByb3ZpZGVkXG5cdFx0XHRhc3NlcnQgcHJvcGVydHk/IGRlZmF1bHRzIGtleSB0aHJvdyBcIk5vIHN1Y2ggb3B0aW9uICNrZXkuXCJcblx0XHRcdG8uXCIja2V5XCIgOj0gcHJvdmlkZWQuXCIja2V5XCJcblxuXHRcdGZvciBrZXkgb2YgT2JqZWN0LmtleXMgZGVmYXVsdHNcblx0XHRcdHVubGVzcyBwcm9wZXJ0eT8gbyBrZXlcblx0XHRcdFx0YXNzZXJ0IGRlZmluZWQ/IGRlZmF1bHRzLlwiI2tleVwiIHRocm93IFwiT3B0aW9uICNrZXkgbXVzdCBiZSBwcm92aWRlZC5cIlxuXHRcdFx0XHRvLlwiI2tleVwiIDo9IGRlZmF1bHRzLlwiI2tleVwiXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
