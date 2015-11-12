"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","fs-extra-promise","msl/dist/control","msl/dist/Object","path","jstransformer","msl/dist/Type/primitive","msl/dist/at/at","msl/dist/at/q","msl/dist/at/Map/Map","msl/dist/Type/Type","msl/dist/at/Set/Id-Set","msl/dist/at/Map/Id-Map"],(exports,_boot,fs_45extra_45promise_0,control_1,Object_2,path_3,jstransformer_4,primitive_5,_64_6,_63_7,Map_8,Type_9,Id_45Set_10,Id_45Map_11)=>{
	_ms.getModule(_boot);
	let _$2=_ms.getModule(fs_45extra_45promise_0),copyAsync=_ms.get(_$2,"copyAsync"),outputFileAsync=_ms.get(_$2,"outputFileAsync"),_$3=_ms.getModule(control_1),opr=_ms.get(_$3,"opr"),_$4=_ms.getModule(Object_2),property_63=_ms.get(_$4,"property?"),_$5=_ms.getModule(path_3),join=_ms.get(_$5,"join"),jstransformer=_ms.getDefaultExport(jstransformer_4),_$6=_ms.getModule(primitive_5),Str=_ms.get(_$6,"Str"),_$7=_ms.getModule(_64_6),empty_63=_ms.get(_$7,"empty?"),empty=_ms.get(_$7,"empty"),_43_43_126=_ms.get(_$7,"++~"),_45_45_33=_ms.get(_$7,"--!"),_$8=_ms.getModule(_63_7),_63None=_ms.get(_$8,"?None"),_63_45or=_ms.get(_$8,"?-or"),_63some=_ms.get(_$8,"?some"),Opt_45_62_63=_ms.get(_$8,"Opt->?"),_$9=_ms.getModule(Map_8),_63get=_ms.get(_$9,"?get"),_$10=_ms.getModule(Type_9),_61_62=_ms.get(_$10,"=>"),Id_45Set=_ms.getDefaultExport(Id_45Set_10),Id_45Map=_ms.getDefaultExport(Id_45Map_11);
	let Transformers=exports.default=class Transformers{
		constructor(options){
			let _this=this;
			_ms.newProperty(_this,"ext->transformer",create_45ext_45_62transformer(options))
		}
		"?out-extension"(in_45extension){
			let _this=this;
			return _this["choose-transform"](in_45extension)["?out-extension"]
		}
		"$transform!"(paths){
			let _this=this;
			return _ms.async(function*(){
				return _ms.checkInstance(_ms.sub(Array,Str),(yield _this["choose-transform"](paths["in-extension"])["$transform!"](paths["full-in-path"],paths["full-out-path"])),"returned value")
			})
		}
		"choose-transform"(in_45extension){
			let _this=this;
			return (()=>{
				let _=in_45extension;
				if(empty_63(_)){
					return new (Identity_45Transform)(_63None)
				} else {
					if(! _.startsWith(`.`))throw (()=>{
						return `Extension should start with \`.\`. Got: ${in_45extension}`
					})();
					let ext=_.slice(1);
					return _63_45or(_63get(_this["ext->transformer"],ext),_ms.lazy(()=>new (Identity_45Transform)(_63some(ext))))
				}
			})()
		}
	};
	let create_45ext_45_62transformer=function create_45ext_45_62transformer(options){
		let _$0=options,package_45config=_$0["package-config"],package_45dir=_$0["package-dir"],opts=_$0.opts;
		let unused_45opts=_61_62(Id_45Set,Object.keys(opts));
		let transform_45names_45with_45no_45options=[];
		return (()=>{
			let ext_45_62transformer=empty(Id_45Map);
			let dependencies=opr(package_45config.dependencies,new (Object)());
			let dev_45dependencies=opr(package_45config.devDependencies,new (Object)());
			for(let package_45name of _43_43_126(Object.keys(dependencies),Object.keys(dev_45dependencies))){
				if(package_45name.startsWith("jstransformer-")){
					let pkg=require(join(package_45dir,"node_modules",package_45name));
					let transform=new (Real_45Transform)(pkg,(()=>{
						let _=pkg.name;
						if(property_63(opts,_)){
							_45_45_33(unused_45opts,[_]);
							return opts[`${pkg.name}`]
						} else {
							transform_45names_45with_45no_45options.push(_);
							return null
						}
					})());
					for(let ext of transform["@in-extensions"]){
						_ms.setSub(ext_45_62transformer,ext,transform,"init")
					}
				}
			};
			for(let pkg_45name of unused_45opts){
				throw new (Error)(`${pkg_45name} does not name any known transform.
You probably meant one of: ${transform_45names_45with_45no_45options.join(`, `)}.`)
			};
			return ext_45_62transformer
		})()
	};
	let Real_45Transform=class Real_45Transform{
		constructor(transformer,_45options){
			let _this=this;
			_ms.newProperty(this,"-options",_45options);
			_ms.newProperty(_this,"-transformer",jstransformer(transformer))
		}
		get "@in-extensions"(){
			let _this=this;
			return _this["-transformer"].inputFormats
		}
		get "?out-extension"(){
			let _this=this;
			return Opt_45_62_63(_this["-transformer"].outputFormat)
		}
		"$transform!"(full_45in_45path,full_45out_45path){
			let _this=this;
			return _ms.async(function*(){
				let locals={
					filename:full_45in_45path
				};
				let _$1=(yield _this["-transformer"].renderFileAsync(full_45in_45path,_this["-options"],locals)),body=_$1.body,dependencies=_$1.dependencies;
				(yield outputFileAsync(full_45out_45path,body));
				return _63_45or(Opt_45_62_63(dependencies),[])
			})
		}
	};
	let Identity_45Transform=class Identity_45Transform{
		constructor(_63out_45extension){
			let _this=this;
			_ms.newProperty(this,"?out-extension",_63out_45extension)
		}
		"$transform!"(full_45in_45path,full_45out_45path){
			let _this=this;
			return _ms.async(function*(){
				(yield copyAsync(full_45in_45path,full_45out_45path));
				return []
			})
		}
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvVHJhbnNmb3JtZXJzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0NBUUEsaUNBQ21CO0VBRVIsWUFBQTtPQThEd0Q7bUJBQUEseUJBN0Q3Qyw4QkFBd0I7RUFBQTttQkFFNUI7T0EyRGlEO1VBQUEsMEJBekQ5Qzs7Z0JBRU87T0F1RHVDOztxQ0F2RGxELE1BQU0sS0FHckIsT0FvRGlFLDBCQXBENUMsc0NBQWdDLHNCQUFtQjs7O3FCQUVuRDtPQWtENEM7VUFqRDVEO0lBQUEsTUFBQTtJQUNKLEdBQUEsU0FBTyxHQUNBO1lBQU4sS0FBSSxzQkFBbUI7SUFBQSxPQUVwQjtLQUFJLEtBQUMsYUFBYSxXQUNRLEtBQUE7YUFBM0IsMkNBQXVDOztLQUN6QyxRQUFPLFFBQU87WUFFZCxTQUFNLE9BeUN5RCwwQkF6Q2xDLGtCQUFPLEtBQUksc0JBQW9CLFFBQU07SUFBQTtHQUFBO0VBQUE7Q0FBQTtDQUd0RSxrQ0FBMkIsdUNBQUE7RUFDMUIsUUFBa0M7RUFDbEMsa0JBQWMsT0FBRyxTQUFRLFlBQVk7RUFDckMsNENBQWtDO1NBQzdCLEtBQ2dDOzRCQURoQyxNQUFNO0dBQ1YsaUJBQWUsSUFBSSw4QkFBNEIsS0FBSTtHQUNuRCx1QkFBbUIsSUFBSSxpQ0FBK0IsS0FBSTtHQUN0RCxRQUFBLGtCQUFnQixXQUFLLFlBQVksY0FBZSxZQUFZLHFCQUNpQjtJQUE3RSxHQUFBLDBCQUF5QixrQkFDYztLQUF6QyxRQUFNLFFBQVMsS0FBSyxjQUFhLGVBQWE7S0FDOUMsY0FBWSxLQUFJLGtCQUFlLElBQVM7TUFBRyxNQUFIO01BQ3ZDLEdBQUEsWUFBVSxLQUFNLEdBQ0E7T0FDZixVQUFJLGNBQVksQ0FBRTtjQUNsQixLQUFNLEdBQUU7YUFFTDtPQUFILDZDQUFzQztjQUN0QztNQUFBO0tBQUE7S0FDRSxRQUFBLE9BQU8sNEJBQ3dCO2lCQUFsQyxxQkFBaUIsSUFBTzs7OztHQUV2QixRQUFBLGNBQVksY0FDVztJQUExQixrQkFDQyxHQUFDLDRFQUM0Qiw2Q0FBc0M7Ozs7O0NBRXZFLHFCQUNzQjtFQUFYLFlBQUEsWUFBWTtPQVc0Qzs7bUJBQUEscUJBVmpELGNBQWM7RUFBQTt3QkFHWjtPQU8rQztVQUFBOzt3QkFKL0M7T0FJK0M7VUFKakUsYUFJaUU7O2dCQUZuRCxpQkFBYTtPQUVzQzs7SUFEakUsV0FBUztjQUFVO0lBQUE7SUFDbkIsUUFBb0IsT0FBNkMsc0NBQWIsaUJBQWEsa0JBQVU7V0FDekUsZ0JBQWdCLGtCQUFjO1dBQ2hDLFNBQU0sYUFBTyxjQUFjO0dBQUE7RUFBQTtDQUFBO0NBRTdCLHlCQUMwQjtFQUlmLFlBQUE7T0FUd0Q7OztnQkFZbkQsaUJBQWE7T0Fac0M7O1dBYS9ELFVBQVUsaUJBQWE7V0FDekI7R0FBQTtFQUFBO0NBQUEiLCJmaWxlIjoicHJpdmF0ZS9UcmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0ZnMtZXh0cmEtcHJvbWlzZSBjb3B5QXN5bmMgb3V0cHV0RmlsZUFzeW5jXG5cdGdsb2JhbCByZXF1aXJlXG5cdG1zbC5kaXN0LmNvbnRyb2wgb3ByXG5cdG1zbC5kaXN0Lk9iamVjdCBwcm9wZXJ0eT9cblx0cGF0aCBqb2luXG5cdGpzdHJhbnNmb3JtZXJcblxuVHJhbnNmb3JtZXJzLiBjbGFzc1xuXHR8IEtlZXBzIHRyYWNrIG9mIGFsbCBqc3RyYW5zZm9ybWVycyBhbmQgY2FuIHRyYW5zZm9ybSBhbnkgZmlsZS5cblxuXHRjb25zdHJ1Y3Qgb3B0aW9uc1xuXHRcdC5leHQtPnRyYW5zZm9ybWVyID0gY3JlYXRlLWV4dC0+dHJhbnNmb3JtZXIgb3B0aW9uc1xuXG5cdCc/b3V0LWV4dGVuc2lvbiB8aW4tZXh0ZW5zaW9uXG5cdFx0fCBGaWxlIGV4dGVuc2lvbiBmb3Igb3V0cHV0IGZpbGUuXG5cdFx0KC5jaG9vc2UtdHJhbnNmb3JtIGluLWV4dGVuc2lvbikuP291dC1leHRlbnNpb25cblxuXHQnJHRyYW5zZm9ybSEgJHw6QXJyYXlbU3RyXSBwYXRoc1xuXHRcdHwgVHJhbnNmb3JtIGlucHV0IGZpbGUgYW5kIHdyaXRlIHRvIG91dHB1dCBmaWxlLlxuXHRcdHwgcmV0dXJuOiBkZXBlbmRlbmNpZXNcblx0XHQkICguY2hvb3NlLXRyYW5zZm9ybSBwYXRocy5pbi1leHRlbnNpb24pLiR0cmFuc2Zvcm0hIHBhdGhzLmZ1bGwtaW4tcGF0aCBwYXRocy5mdWxsLW91dC1wYXRoXG5cblx0bXkgJ2Nob29zZS10cmFuc2Zvcm0gfGluLWV4dGVuc2lvblxuXHRcdGNhc2UgaW4tZXh0ZW5zaW9uXG5cdFx0XHRlbXB0eT9fXG5cdFx0XHRcdG5ldyBJZGVudGl0eS1UcmFuc2Zvcm0gP05vbmVcblx0XHRcdGVsc2Vcblx0XHRcdFx0YXNzZXJ0IF8uc3RhcnRzV2l0aCBcIi5cIiB0aHJvd1xuXHRcdFx0XHRcdFwiRXh0ZW5zaW9uIHNob3VsZCBzdGFydCB3aXRoIGAuYC4gR290OiAjaW4tZXh0ZW5zaW9uXCJcblx0XHRcdFx0ZXh0ID0gXy5zbGljZSAxXG5cdFx0XHRcdHRvZG8gP2dldCB3aXRoIGRlZmF1bHRcblx0XHRcdFx0Py1vciAoP2dldCAuZXh0LT50cmFuc2Zvcm1lciBleHQpIH4obmV3IElkZW50aXR5LVRyYW5zZm9ybSAoP3NvbWUgZXh0KSlcblxufHwgT2JqZWN0IGxpa2UgYGphZGUuIChwcmV0dHkuIHRydWUpYFxuY3JlYXRlLWV4dC0+dHJhbnNmb3JtZXIgPSB8b3B0aW9uc1xuXHRwYWNrYWdlLWNvbmZpZyBwYWNrYWdlLWRpciBvcHRzID0gb3B0aW9uc1xuXHR1bnVzZWQtb3B0cyA9ID0+IElkLVNldCAoT2JqZWN0LmtleXMgb3B0cylcblx0dHJhbnNmb3JtLW5hbWVzLXdpdGgtbm8tb3B0aW9ucyA9IFtdXG5cdHdpdGggZW1wdHkgSWQtTWFwIGFzIGV4dC0+dHJhbnNmb3JtZXJcblx0XHRkZXBlbmRlbmNpZXMgPSBvcHIgcGFja2FnZS1jb25maWcuZGVwZW5kZW5jaWVzIG5ldyBPYmplY3Rcblx0XHRkZXYtZGVwZW5kZW5jaWVzID0gb3ByIHBhY2thZ2UtY29uZmlnLmRldkRlcGVuZGVuY2llcyBuZXcgT2JqZWN0XG5cdFx0Zm9yIHBhY2thZ2UtbmFtZSBvZiArK34gKE9iamVjdC5rZXlzIGRlcGVuZGVuY2llcykgKE9iamVjdC5rZXlzIGRldi1kZXBlbmRlbmNpZXMpXG5cdFx0XHRpZiBwYWNrYWdlLW5hbWUuc3RhcnRzV2l0aCAnanN0cmFuc2Zvcm1lci1cblx0XHRcdFx0cGtnID0gcmVxdWlyZSAoam9pbiBwYWNrYWdlLWRpciAnbm9kZV9tb2R1bGVzIHBhY2thZ2UtbmFtZSlcblx0XHRcdFx0dHJhbnNmb3JtID0gbmV3IFJlYWwtVHJhbnNmb3JtIHBrZyBjYXNlIHBrZy5uYW1lXG5cdFx0XHRcdFx0cHJvcGVydHk/IG9wdHMgX1xuXHRcdFx0XHRcdFx0dG9kbyAtIVxuXHRcdFx0XHRcdFx0LS0hIHVudXNlZC1vcHRzIFtfXVxuXHRcdFx0XHRcdFx0b3B0cy5cIiMocGtnLm5hbWUpXCJcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0tbmFtZXMtd2l0aC1uby1vcHRpb25zLnB1c2ggX1xuXHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRmb3IgZXh0IG9mIHRyYW5zZm9ybS5AaW4tZXh0ZW5zaW9uc1xuXHRcdFx0XHRcdGV4dC0+dHJhbnNmb3JtZXJbZXh0XSA9IHRyYW5zZm9ybVxuXG5cdFx0Zm9yIHBrZy1uYW1lIG9mIHVudXNlZC1vcHRzXG5cdFx0XHR0aHJvdyBcIlxuXHRcdFx0XHQjcGtnLW5hbWUgZG9lcyBub3QgbmFtZSBhbnkga25vd24gdHJhbnNmb3JtLlxuXHRcdFx0XHRZb3UgcHJvYmFibHkgbWVhbnQgb25lIG9mOiAjKHRyYW5zZm9ybS1uYW1lcy13aXRoLW5vLW9wdGlvbnMuam9pbiBcIiwgXCIpLlxuXG5SZWFsLVRyYW5zZm9ybSA9IGNsYXNzXG5cdGNvbnN0cnVjdCB0cmFuc2Zvcm1lciAuLW9wdGlvbnNcblx0XHQuLXRyYW5zZm9ybWVyID0ganN0cmFuc2Zvcm1lciB0cmFuc2Zvcm1lclxuXG5cdGdldCAnQGluLWV4dGVuc2lvbnNcblx0XHQuLXRyYW5zZm9ybWVyLmlucHV0Rm9ybWF0c1xuXG5cdGdldCAnP291dC1leHRlbnNpb25cblx0XHRPcHQtPj8gLi10cmFuc2Zvcm1lci5vdXRwdXRGb3JtYXRcblxuXHQnJHRyYW5zZm9ybSEgJHxmdWxsLWluLXBhdGggZnVsbC1vdXQtcGF0aFxuXHRcdGxvY2FscyA9IGZpbGVuYW1lLiBmdWxsLWluLXBhdGhcblx0XHRib2R5IGRlcGVuZGVuY2llcyA9ICQgLi10cmFuc2Zvcm1lci5yZW5kZXJGaWxlQXN5bmMgZnVsbC1pbi1wYXRoIC4tb3B0aW9ucyBsb2NhbHNcblx0XHQkIG91dHB1dEZpbGVBc3luYyBmdWxsLW91dC1wYXRoIGJvZHlcblx0XHQ/LW9yIChPcHQtPj8gZGVwZW5kZW5jaWVzKSBbXVxuXG5JZGVudGl0eS1UcmFuc2Zvcm0gPSBjbGFzc1xuXHR8IFRyYW5zZm9ybSB0aGF0IGNvcGllcyB0aGUgaW5wdXQuXG5cdHwgVGhpcyBzaG91bGRuJ3QgYmUgaW1wbGVtZW50ZWQgYXMgYSByZWFsIGpzdHJhbnNmb3JtZXIgYmVjYXVzZSB0aG9zZSB3b3JrIG9uIHN0cmluZ3MuXG5cdHwgRG9pbmcgYSBwbGFpbiBmaWxlIGNvcHkgaXMgbW9yZSBlZmZpY2llbnQuXG5cblx0Y29uc3RydWN0IC4/b3V0LWV4dGVuc2lvblxuXHRcdHBhc3NcblxuXHQnJHRyYW5zZm9ybSEgJHxmdWxsLWluLXBhdGggZnVsbC1vdXQtcGF0aFxuXHRcdCQgY29weUFzeW5jIGZ1bGwtaW4tcGF0aCBmdWxsLW91dC1wYXRoXG5cdFx0W11cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
