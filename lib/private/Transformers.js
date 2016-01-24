"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","fs-extra-promise","msl/lib/control","msl/lib/Object","path","jstransformer","msl/lib/Type/primitive","msl/lib/at/at","msl/lib/at/q","msl/lib/at/Map/Map","msl/lib/Type/Type","msl/lib/at/Set/Id-Set","msl/lib/at/Map/Id-Map"],(exports,_boot,fs_45extra_45promise_0,control_1,Object_2,path_3,jstransformer_4,primitive_5,_64_6,_63_7,Map_8,Type_9,Id_45Set_10,Id_45Map_11)=>{
	_ms.getModule(_boot);
	let _$2=_ms.getModule(fs_45extra_45promise_0),copyAsync=_ms.get(_$2,"copyAsync"),outputFileAsync=_ms.get(_$2,"outputFileAsync"),_$3=_ms.getModule(control_1),opr=_ms.get(_$3,"opr"),_$4=_ms.getModule(Object_2),property_63=_ms.get(_$4,"property?"),_$5=_ms.getModule(path_3),join=_ms.get(_$5,"join"),jstransformer=_ms.getDefaultExport(jstransformer_4),_$6=_ms.getModule(primitive_5),Str=_ms.get(_$6,"Str"),_$7=_ms.getModule(_64_6),empty_63=_ms.get(_$7,"empty?"),empty=_ms.get(_$7,"empty"),_43_43_126=_ms.get(_$7,"++~"),_45_45_33=_ms.get(_$7,"--!"),_$8=_ms.getModule(_63_7),_63None=_ms.get(_$8,"?None"),_63_45or=_ms.get(_$8,"?-or"),_63some=_ms.get(_$8,"?some"),Opt_45_62_63=_ms.get(_$8,"Opt->?"),_$9=_ms.getModule(Map_8),_63get=_ms.get(_$9,"?get"),_$10=_ms.getModule(Type_9),_61_62=_ms.get(_$10,"=>"),Id_45Set=_ms.getDefaultExport(Id_45Set_10),Id_45Map=_ms.getDefaultExport(Id_45Map_11);
	let Transformers=exports.default=class Transformers{
		constructor(options){
			let _this=this;
			_this["ext->transformer"]=create_45ext_45_62transformer(options)
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
						_ms.setSub(ext_45_62transformer,ext,transform)
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
			this["-options"]=_45options;
			_this["-transformer"]=jstransformer(transformer)
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
			this["?out-extension"]=_63out_45extension
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvVHJhbnNmb3JtZXJzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0NBUUEsaUNBQ21CO0VBRVIsWUFBQSxRQUNPOztHQUFoQiwwQkFBcUIsOEJBQXdCO0VBQUE7bUJBRTlCLGVBQ1k7O1VBQzFCLDBCQUFrQjs7Z0JBRU07OytCQUNLO3FDQURoQixNQUFNLEtBR3BCLE9BQUcsMEJBQWtCLHNDQUFnQyxzQkFBbUI7OztxQkFFcEQsZUFDWTs7VUFBM0I7SUFBQSxNQUFBO0lBQ0osR0FBQSxTQUFPLEdBQ0E7WUFBTixLQUFJLHNCQUFtQjtJQUFBLE9BRXBCO0tBQUksS0FBQyxhQUFhLFdBQ1EsS0FBQTthQUEzQiwyQ0FBdUM7O0tBQ3pDLFFBQU8sUUFBTztZQUVkLFNBQU0sT0FBSywwQkFBa0Isa0JBQU8sS0FBSSxzQkFBb0IsUUFBTTtJQUFBO0dBQUE7RUFBQTtDQUFBO0NBR3RFLGtDQUEyQix1Q0FBQSxRQUNPO0VBQWpDLFFBQW9DO0VBQ3BDLGtCQUFjLE9BQUcsU0FBUSxZQUFZO0VBQ3JDLDRDQUFrQztTQUM3QixLQUNnQzs0QkFEaEMsTUFBTTtHQUNWLGlCQUFlLElBQUksOEJBQTRCLEtBQUk7R0FDbkQsdUJBQW1CLElBQUksaUNBQStCLEtBQUk7R0FDdEQsUUFBQSxrQkFBZ0IsV0FBSyxZQUFZLGNBQWUsWUFBWSxxQkFDaUI7SUFBN0UsR0FBQSwwQkFBeUIsa0JBQ2M7S0FBekMsUUFBTSxRQUFTLEtBQUssY0FBYSxlQUFhO0tBQzlDLGNBQVksS0FBSSxrQkFBZSxJQUFTO01BQUcsTUFBSDtNQUN2QyxHQUFBLFlBQVUsS0FBTSxHQUNBO09BQ2YsVUFBSSxjQUFZLENBQUU7Y0FDbEIsS0FBTSxHQUFFO2FBRUw7T0FBSCw2Q0FBc0M7Y0FDdEM7TUFBQTtLQUFBO0tBQ0UsUUFBQSxPQUFPLDRCQUN3QjtpQkFBbEMscUJBQWlCLElBQVE7S0FBQTtJQUFBO0dBQUE7R0FFeEIsUUFBQSxjQUFZLGNBQ1c7SUFBMUIsa0JBQ0MsR0FBQzs2QkFDNEIsNkNBQXNDOzs7OztDQUV2RSxxQkFDc0I7RUFBWCxZQUFBLFlBQVksV0FDUzs7O0dBQTlCLHNCQUFpQixjQUFjO0VBQUE7RUFFaEMsc0JBQ2tCOztVQUFqQjs7RUFFRCxzQkFDa0I7O1VBQWpCLGFBQU87O2dCQUVNLGlCQUFhOzsrQkFDYTtJQUF2QyxXQUFTO2NBQVc7SUFBQTtJQUNwQixRQUFzQixPQUFFLHNDQUE4QixpQkFBYSxrQkFBVTtXQUMzRSxnQkFBZ0Isa0JBQWM7V0FDaEMsU0FBTSxhQUFPLGNBQWM7R0FBQTtFQUFBO0NBQUE7Q0FFN0IseUJBQzBCO0VBSWYsWUFBQSxtQkFDZTs7OztnQkFFWCxpQkFBYTs7K0JBQ2E7V0FBckMsVUFBVSxpQkFBYTtXQUN6QjtHQUFBO0VBQUE7Q0FBQSIsImZpbGUiOiJwcml2YXRlL1RyYW5zZm9ybWVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRmcy1leHRyYS1wcm9taXNlIGNvcHlBc3luYyBvdXRwdXRGaWxlQXN5bmNcblx0Z2xvYmFsIHJlcXVpcmVcblx0bXNsLmxpYi5jb250cm9sIG9wclxuXHRtc2wubGliLk9iamVjdCBwcm9wZXJ0eT9cblx0cGF0aCBqb2luXG5cdGpzdHJhbnNmb3JtZXJcblxuVHJhbnNmb3JtZXJzLiBjbGFzc1xuXHR8IEtlZXBzIHRyYWNrIG9mIGFsbCBqc3RyYW5zZm9ybWVycyBhbmQgY2FuIHRyYW5zZm9ybSBhbnkgZmlsZS5cblxuXHRjb25zdHJ1Y3Qgb3B0aW9uc1xuXHRcdC5leHQtPnRyYW5zZm9ybWVyIDo9IGNyZWF0ZS1leHQtPnRyYW5zZm9ybWVyIG9wdGlvbnNcblxuXHQ/b3V0LWV4dGVuc2lvbiBcXGluLWV4dGVuc2lvblxuXHRcdHwgRmlsZSBleHRlbnNpb24gZm9yIG91dHB1dCBmaWxlLlxuXHRcdCguY2hvb3NlLXRyYW5zZm9ybSBpbi1leHRlbnNpb24pLj9vdXQtZXh0ZW5zaW9uXG5cblx0JHRyYW5zZm9ybSEgJFxcOkFycmF5W1N0cl0gcGF0aHNcblx0XHR8IFRyYW5zZm9ybSBpbnB1dCBmaWxlIGFuZCB3cml0ZSB0byBvdXRwdXQgZmlsZS5cblx0XHR8IHJldHVybjogZGVwZW5kZW5jaWVzXG5cdFx0JCAoLmNob29zZS10cmFuc2Zvcm0gcGF0aHMuaW4tZXh0ZW5zaW9uKS4kdHJhbnNmb3JtISBwYXRocy5mdWxsLWluLXBhdGggcGF0aHMuZnVsbC1vdXQtcGF0aFxuXG5cdG15IGNob29zZS10cmFuc2Zvcm0gXFxpbi1leHRlbnNpb25cblx0XHRjYXNlIGluLWV4dGVuc2lvblxuXHRcdFx0ZW1wdHk/X1xuXHRcdFx0XHRuZXcgSWRlbnRpdHktVHJhbnNmb3JtID9Ob25lXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGFzc2VydCBfLnN0YXJ0c1dpdGggXCIuXCIgdGhyb3dcblx0XHRcdFx0XHRcIkV4dGVuc2lvbiBzaG91bGQgc3RhcnQgd2l0aCBgLmAuIEdvdDogI2luLWV4dGVuc2lvblwiXG5cdFx0XHRcdGV4dCA9IF8uc2xpY2UgMVxuXHRcdFx0XHR0b2RvID9nZXQgd2l0aCBkZWZhdWx0XG5cdFx0XHRcdD8tb3IgKD9nZXQgLmV4dC0+dHJhbnNmb3JtZXIgZXh0KSB+KG5ldyBJZGVudGl0eS1UcmFuc2Zvcm0gKD9zb21lIGV4dCkpXG5cbnx8IE9iamVjdCBsaWtlIGBqYWRlLiAocHJldHR5LiB0cnVlKWBcbmNyZWF0ZS1leHQtPnRyYW5zZm9ybWVyID0gXFxvcHRpb25zXG5cdHtwYWNrYWdlLWNvbmZpZyBwYWNrYWdlLWRpciBvcHRzfSA9IG9wdGlvbnNcblx0dW51c2VkLW9wdHMgPSA9PiBJZC1TZXQgKE9iamVjdC5rZXlzIG9wdHMpXG5cdHRyYW5zZm9ybS1uYW1lcy13aXRoLW5vLW9wdGlvbnMgPSBbXVxuXHR3aXRoIGVtcHR5IElkLU1hcCBhcyBleHQtPnRyYW5zZm9ybWVyXG5cdFx0ZGVwZW5kZW5jaWVzID0gb3ByIHBhY2thZ2UtY29uZmlnLmRlcGVuZGVuY2llcyBuZXcgT2JqZWN0XG5cdFx0ZGV2LWRlcGVuZGVuY2llcyA9IG9wciBwYWNrYWdlLWNvbmZpZy5kZXZEZXBlbmRlbmNpZXMgbmV3IE9iamVjdFxuXHRcdGZvciBwYWNrYWdlLW5hbWUgb2YgKyt+IChPYmplY3Qua2V5cyBkZXBlbmRlbmNpZXMpIChPYmplY3Qua2V5cyBkZXYtZGVwZW5kZW5jaWVzKVxuXHRcdFx0aWYgcGFja2FnZS1uYW1lLnN0YXJ0c1dpdGggJ2pzdHJhbnNmb3JtZXItXG5cdFx0XHRcdHBrZyA9IHJlcXVpcmUgKGpvaW4gcGFja2FnZS1kaXIgJ25vZGVfbW9kdWxlcyBwYWNrYWdlLW5hbWUpXG5cdFx0XHRcdHRyYW5zZm9ybSA9IG5ldyBSZWFsLVRyYW5zZm9ybSBwa2cgY2FzZSBwa2cubmFtZVxuXHRcdFx0XHRcdHByb3BlcnR5PyBvcHRzIF9cblx0XHRcdFx0XHRcdHRvZG8gLSFcblx0XHRcdFx0XHRcdC0tISB1bnVzZWQtb3B0cyBbX11cblx0XHRcdFx0XHRcdG9wdHMuXCIjKHBrZy5uYW1lKVwiXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtLW5hbWVzLXdpdGgtbm8tb3B0aW9ucy5wdXNoIF9cblx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0Zm9yIGV4dCBvZiB0cmFuc2Zvcm0uQGluLWV4dGVuc2lvbnNcblx0XHRcdFx0XHRleHQtPnRyYW5zZm9ybWVyW2V4dF0gOj0gdHJhbnNmb3JtXG5cblx0XHRmb3IgcGtnLW5hbWUgb2YgdW51c2VkLW9wdHNcblx0XHRcdHRocm93IFwiXG5cdFx0XHRcdCNwa2ctbmFtZSBkb2VzIG5vdCBuYW1lIGFueSBrbm93biB0cmFuc2Zvcm0uXG5cdFx0XHRcdFlvdSBwcm9iYWJseSBtZWFudCBvbmUgb2Y6ICModHJhbnNmb3JtLW5hbWVzLXdpdGgtbm8tb3B0aW9ucy5qb2luIFwiLCBcIikuXG5cblJlYWwtVHJhbnNmb3JtID0gY2xhc3Ncblx0Y29uc3RydWN0IHRyYW5zZm9ybWVyIC4tb3B0aW9uc1xuXHRcdC4tdHJhbnNmb3JtZXIgOj0ganN0cmFuc2Zvcm1lciB0cmFuc2Zvcm1lclxuXG5cdGdldCBAaW4tZXh0ZW5zaW9uc1xuXHRcdC4tdHJhbnNmb3JtZXIuaW5wdXRGb3JtYXRzXG5cblx0Z2V0ID9vdXQtZXh0ZW5zaW9uXG5cdFx0T3B0LT4/IC4tdHJhbnNmb3JtZXIub3V0cHV0Rm9ybWF0XG5cblx0JHRyYW5zZm9ybSEgJFxcZnVsbC1pbi1wYXRoIGZ1bGwtb3V0LXBhdGhcblx0XHRsb2NhbHMgPSB7ZmlsZW5hbWUuIGZ1bGwtaW4tcGF0aH1cblx0XHR7Ym9keSBkZXBlbmRlbmNpZXN9ID0gJCAuLXRyYW5zZm9ybWVyLnJlbmRlckZpbGVBc3luYyBmdWxsLWluLXBhdGggLi1vcHRpb25zIGxvY2Fsc1xuXHRcdCQgb3V0cHV0RmlsZUFzeW5jIGZ1bGwtb3V0LXBhdGggYm9keVxuXHRcdD8tb3IgKE9wdC0+PyBkZXBlbmRlbmNpZXMpIFtdXG5cbklkZW50aXR5LVRyYW5zZm9ybSA9IGNsYXNzXG5cdHwgVHJhbnNmb3JtIHRoYXQgY29waWVzIHRoZSBpbnB1dC5cblx0fCBUaGlzIHNob3VsZG4ndCBiZSBpbXBsZW1lbnRlZCBhcyBhIHJlYWwganN0cmFuc2Zvcm1lciBiZWNhdXNlIHRob3NlIHdvcmsgb24gc3RyaW5ncy5cblx0fCBEb2luZyBhIHBsYWluIGZpbGUgY29weSBpcyBtb3JlIGVmZmljaWVudC5cblxuXHRjb25zdHJ1Y3QgLj9vdXQtZXh0ZW5zaW9uXG5cdFx0cGFzc1xuXG5cdCR0cmFuc2Zvcm0hICRcXGZ1bGwtaW4tcGF0aCBmdWxsLW91dC1wYXRoXG5cdFx0JCBjb3B5QXN5bmMgZnVsbC1pbi1wYXRoIGZ1bGwtb3V0LXBhdGhcblx0XHRbXVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
