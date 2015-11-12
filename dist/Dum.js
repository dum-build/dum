"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","fs-extra-promise","http-server","node-watch","path","./private/Dependencies","./private/fs-util","./private/Logger","./private/Options","./private/Paths","./private/Transformers","./private/util","msl/dist/at/q"],(exports,_boot,fs_45extra_45promise_0,http_45server_1,node_45watch_2,path_3,Dependencies_4,fs_45util_5,Logger_6,Options_7,Paths_8,Transformers_9,util_10,_63_11)=>{
	_ms.getModule(_boot);
	let _$3=_ms.getModule(fs_45extra_45promise_0),copyAsync=_ms.get(_$3,"copyAsync"),emptyDirAsync=_ms.get(_$3,"emptyDirAsync"),mkdirsAsync=_ms.get(_$3,"mkdirsAsync"),removeAsync=_ms.get(_$3,"removeAsync"),_$4=_ms.getModule(http_45server_1),createServer=_ms.get(_$4,"createServer"),node_45watch=_ms.getDefaultExport(node_45watch_2),_$5=_ms.getModule(path_3),basename=_ms.get(_$5,"basename"),join=_ms.get(_$5,"join"),relative=_ms.get(_$5,"relative"),Dependencies=_ms.getDefaultExport(Dependencies_4),_$6=_ms.getModule(fs_45util_5),$path_45exists_63=_ms.get(_$6,"$path-exists?"),$path_45kind=_ms.get(_$6,"$path-kind"),$traverse_45dir_45tree_33=_ms.get(_$6,"$traverse-dir-tree!"),Logger=_ms.getDefaultExport(Logger_6),Options=_ms.getDefaultExport(Options_7),Paths=_ms.getDefaultExport(Paths_8),Transformers=_ms.getDefaultExport(Transformers_9),_$7=_ms.getModule(util_10),$done_45with_45beep=_ms.get(_$7,"$done-with-beep"),_$8=_ms.getModule(_63_11),_63_45cond=_ms.get(_$8,"?-cond");
	let Dum=exports.default=class Dum{
		static $new(package_45dir){
			let _this=this;
			return _ms.async(function*(){
				return new (Dum)((yield Options.$new(package_45dir)))
			})
		}
		constructor(options){
			let _this=this;
			_ms.newProperty(this,"options",options);
			_ms.newProperty(_this,"transformers",new (Transformers)(_this.options));
			_ms.newProperty(_this,"logger",new (Logger)(_this.options));
			_ms.newProperty(_this,"dependencies",new (Dependencies)())
		}
		$build(){
			let _this=this;
			return _ms.async(function*(){
				let _$0=_this.options,in_45dir=_$0["in-dir"],out_45dir=_$0["out-dir"],package_45dir=_$0["package-dir"],_63bower=_$0["?bower"];
				_this.logger["log-build!"](in_45dir,out_45dir);
				(yield emptyDirAsync(out_45dir));
				let $tree=_this["$write-subtree"]("");
				(yield _63_45cond(_63bower,$tree,_=>{
					let bower_45dir=join(package_45dir,_["in-dir"]);
					let full_45out_45path=join(out_45dir,_["out-dir"]);
					_this.logger["log-bower!"](_["in-dir"],_["out-dir"]);
					let $bower_45copy=copyAsync(bower_45dir,join(package_45dir,full_45out_45path));
					return Promise.all([$tree,$bower_45copy])
				}))
			})
		}
		$watch(){
			let _this=this;
			return _ms.async(function*(){
				(yield _this.$build());
				let _$1=_this.options,in_45dir=_$1["in-dir"],out_45dir=_$1["out-dir"];
				_this.logger["log-watch!"](in_45dir,out_45dir);
				node_45watch(in_45dir,full_45in_45path=>{
					let rel_45in_45path=relative(in_45dir,full_45in_45path);
					return $done_45with_45beep((()=>{
						if(_this["should-build-file?"](rel_45in_45path)){
							return _this["$handle-watched!"](_this.paths(rel_45in_45path))
						} else {
							return Promise.all((()=>{
								let built=[];
								for(let path of _this.dependencies.dependers(rel_45in_45path)){
									_this["$handle-depender!"](_this.paths(path),rel_45in_45path)
								};
								return built
							})())
						}
					})())
				})
			})
		}
		$serve(){
			let _this=this;
			return _ms.async(function*(){
				(yield _this.$watch());
				let _$2=_this.options,out_45dir=_$2["out-dir"],port=_$2.port;
				_this.logger["log-serve!"](out_45dir,port);
				return createServer({
					root:out_45dir
				}).listen(port)
			})
		}
		"$write-subtree"(rel_45in_45dir){
			let _this=this;
			return _ms.async(function*(){
				let paths=_=>_this.paths(join(rel_45in_45dir,_));
				(yield $traverse_45dir_45tree_33(join(_this.options["in-dir"],rel_45in_45dir),(yield* function*(){
					let built={};
					let traverse_63=built["traverse?"]=_ms.methodBound(_this,"should-build-file?");
					let $traverse_45dir_33=built["$traverse-dir!"]=_=>mkdirsAsync(paths(_)["full-out-path"]);
					let $traverse_45file_33=built["$traverse-file!"]=_=>_this["$write-single!"](paths(_));
					return built
				}())))
			})
		}
		"$write-single!"(paths){
			let _this=this;
			return _ms.async(function*(){
				let exceptElse_=false;
				try {
					let dependencies=(yield _this.transformers["$transform!"](paths));
					exceptElse_=true;
					_this.dependencies["+depender!"](paths["rel-in-path"],(yield* function*(){
						let built=[];
						for(let _ of dependencies){
							relative(_this.options["in-dir"],_)
						};
						return built
					}()))
				}catch(_){
					if(exceptElse_)throw _;
					(yield _this.logger["$log-error!"](_))
				}
			})
		}
		"$handle-watched!"(paths){
			let _this=this;
			return _ms.async(function*(){
				switch((yield $path_45kind(paths["full-in-path"]))){
					case "none":{
						_this.logger["log-delete!"](paths);
						_this.dependencies["-depender!"](paths["rel-in-path"]);
						(yield removeAsync(paths["full-out-path"]));
						break
					}
					case "directory":{
						_this.logger["log-write!"](paths);
						(yield _this["$write-subtree"](paths["rel-in-path"]));
						break
					}
					case "file":{
						_this.logger["log-write!"](paths);
						(yield _this["$write-single!"](paths));
						break
					}
					default:throw new (Error)("No branch of `switch` matches.")
				}
			})
		}
		"$handle-depender!"(paths,dependency_45path){
			let _this=this;
			return _ms.async(function*(){
				if((yield $path_45exists_63(paths["full-in-path"]))){
					_this.logger["log-dependency!"](paths,dependency_45path);
					(yield _this["$write-single!"](paths))
				}
			})
		}
		"should-build-file?"(in_45file_45path){
			let _this=this;
			return ! basename(in_45file_45path).startsWith("_")
		}
		paths(rel_45in_45path){
			let _this=this;
			return new (Paths)(_this.transformers,_this.options["in-dir"],_this.options["out-dir"],rel_45in_45path)
		}
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL0R1bS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQWNBLHdCQUNVO2NBQ0E7T0F1RmdDOztXQXBGdkMsS0FBSSxLQUFJLE9BQUUsYUFBYTtHQUFBO0VBQUE7RUFFZixZQUFBO09Ba0YrQjs7bUJBQUEscUJBakZ4QixLQUFJLGNBaUZvQjttQkFBQSxlQWhGOUIsS0FBSSxRQWdGMEI7bUJBQUEscUJBL0V4QixLQUFJO0VBQUE7O09BK0VvQjs7SUEzRXhDLFFBMkV3QztJQUFBLDJCQTFFckIsU0FBTztXQUN4QixjQUFjO0lBQ2hCLFVBd0V3Qyx3QkF4RWY7V0FDdkIsV0FBTyxTQUFPLE1BQVE7S0FDdkIsZ0JBQVksS0FBSyxjQUFhO0tBQzlCLHNCQUFnQixLQUFLLFVBQVM7S0FxRVMsMkJBcEVuQixZQUFTO0tBQzdCLGtCQUFjLFVBQVUsWUFBVyxLQUFLLGNBQVk7WUFDcEQsWUFBWSxDQUFDLE1BQU07SUFBQTtHQUFBO0VBQUE7O09Ba0VvQjs7V0FBQTtJQTVEeEMsUUE0RHdDO0lBQUEsMkJBM0RyQixTQUFPO0lBQzFCLGFBQVcsU0FBUTtLQUNsQixvQkFBYyxTQUFTLFNBQU87WUFDOUIsb0JBQ29CO01BQW5CLEdBdURzQyw0QkF2RGxCLGlCQUNXO2NBc0RPLHNDQXREWDtNQUFBLE9BRXZCO2NBQUgsWUFBaUI7O2dCQUFBLFFBb0RvQiw2QkFwRFksaUJBQ1c7U0FtRHZCLHVDQW5EVCxNQUFNO1FBQUE7Ozs7Ozs7OztPQW1ERzs7V0FBQTtJQTdDeEMsUUE2Q3dDO0lBQUEsMkJBNUNyQixVQUFRO1dBQzFCLGFBQWE7VUFBTztJQUFBLFVBQWlCO0dBQUE7RUFBQTttQkFFakI7T0F5Q21COztJQXhDeEMsYUF3Q3dDLFlBeEN0QixLQUFLLGVBQVk7V0FDakMsMEJBQXFCLEtBdUNpQix3QkF2Q0ksZ0JBQ1csbUJBQUE7O0tBQXRELG1EQXNDdUM7S0FwQ3ZDLGtEQUFrQixZQUFZLE1BQU07S0FDcEMsb0RBbUN1Qyx3QkFuQ0osTUFBTTs7Ozs7bUJBRXJCO09BaUNtQjs7O1FBMUJuQztLQUpILGlCQUFlLE9BOEJ1QixrQ0E5Qks7O0tBOEJMLGlDQTFCYixxQkFBdUI7O2NBQUEsS0FBQSxhQUNZO09BQTNELFNBeUJxQyx3QkF6Qlg7TUFBQTs7O2FBSjVCOztZQTZCdUMsNEJBNUJmO0lBQUE7R0FBQTtFQUFBO3FCQUtGO09BdUJpQjs7SUF0QmpDLE9BQUEsT0FBRSxhQUFXO1VBQ2xCLE9BQ0k7TUFvQmtDLDRCQXBCbEI7TUFvQmtCLGlDQW5CYjthQUN2QixZQUFZOzs7VUFDZCxZQUNTO01BZ0I2QiwyQkFoQm5CO2FBZ0JtQix3QkFmcEI7OztVQUNsQixPQUNJO01BYWtDLDJCQWJuQjthQWFtQix3QkFacEI7Ozs7Ozs7c0JBRUksTUFBTTtPQVVVOztJQVJyQyxHQUFBLE9BQUUsa0JBQWMsd0JBQ2tCO0tBT0csZ0NBUGYsTUFBTTtZQU9TLHdCQU5yQjtJQUFBO0dBQUE7RUFBQTt1QkFFSTtPQUlpQjtVQUh4QyxFQUFLLFNBQVMsNkJBQTJCO0VBQUE7UUFFL0I7T0FDOEI7VUFBeEMsS0FBSSxPQUFvQyxvRUFBaUI7RUFBQTtDQUFBIiwiZmlsZSI6IkR1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRmcy1leHRyYS1wcm9taXNlIGNvcHlBc3luYyBlbXB0eURpckFzeW5jIG1rZGlyc0FzeW5jIHJlbW92ZUFzeW5jXG5cdGh0dHAtc2VydmVyIGNyZWF0ZVNlcnZlclxuXHRub2RlLXdhdGNoXG5cdHBhdGggYmFzZW5hbWUgam9pbiByZWxhdGl2ZVxuXHQucHJpdmF0ZS5EZXBlbmRlbmNpZXNcblx0LnByaXZhdGUuZnMtdXRpbCAkcGF0aC1leGlzdHM/ICRwYXRoLWtpbmQgJHRyYXZlcnNlLWRpci10cmVlIVxuXHQucHJpdmF0ZS5Mb2dnZXJcblx0LnByaXZhdGUuT3B0aW9uc1xuXHQucHJpdmF0ZS5QYXRoc1xuXHQucHJpdmF0ZS5UcmFuc2Zvcm1lcnNcblx0LnByaXZhdGUudXRpbCAkZG9uZS13aXRoLWJlZXBcblxudG9kbyBTWU5UQVggU2hvdWxkbid0IGhhdmUgdG8gZXhwbGljaXRseSBhc3NpZ24gdG8gYER1bWBcbkR1bS4gY2xhc3Ncblx0c3RhdGljXG5cdFx0JyRuZXcgJHxwYWNrYWdlLWRpclxuXHRcdFx0fCBDcmVhdGVzIGEgbmV3IER1bSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIHBhY2thZ2UuXG5cdFx0XHR8IFRoaXMgbG9hZHMgb3B0aW9ucyBmcm9tIHRoZSBgcGFja2FnZS5qc29uYCB0aGVyZS5cblx0XHRcdG5ldyBEdW0gJCBPcHRpb25zLiRuZXcgcGFja2FnZS1kaXJcblxuXHRjb25zdHJ1Y3QgLm9wdGlvbnNcblx0XHQudHJhbnNmb3JtZXJzID0gbmV3IFRyYW5zZm9ybWVycyAub3B0aW9uc1xuXHRcdC5sb2dnZXIgPSBuZXcgTG9nZ2VyIC5vcHRpb25zXG5cdFx0LmRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXNcblxuXHQnJGJ1aWxkICQhfFxuXHRcdHwgVHJhbnNmb3JtcyBgaW4tZGlyYCB0byBgb3V0LWRpcmAgYW5kIGNvcGllcyBgYm93ZXIuaW4tZGlyYCB0byBgYm93ZXIub3V0LWRpcmAuXG5cdFx0aW4tZGlyIG91dC1kaXIgcGFja2FnZS1kaXIgP2Jvd2VyID0gLm9wdGlvbnNcblx0XHQubG9nZ2VyLmxvZy1idWlsZCEgaW4tZGlyIG91dC1kaXJcblx0XHQkIGVtcHR5RGlyQXN5bmMgb3V0LWRpclxuXHRcdCR0cmVlID0gLiR3cml0ZS1zdWJ0cmVlIFwiXCJcblx0XHQkID8tY29uZCA/Ym93ZXIgJHRyZWUgfF9cblx0XHRcdGJvd2VyLWRpciA9IGpvaW4gcGFja2FnZS1kaXIgXy5pbi1kaXJcblx0XHRcdGZ1bGwtb3V0LXBhdGggPSBqb2luIG91dC1kaXIgXy5vdXQtZGlyXG5cdFx0XHQubG9nZ2VyLmxvZy1ib3dlciEgXy5pbi1kaXIgXy5vdXQtZGlyXG5cdFx0XHQkYm93ZXItY29weSA9IGNvcHlBc3luYyBib3dlci1kaXIgKGpvaW4gcGFja2FnZS1kaXIgZnVsbC1vdXQtcGF0aClcblx0XHRcdFByb21pc2UuYWxsIFskdHJlZSAkYm93ZXItY29weV1cblxuXHQnJHdhdGNoICQhfFxuXHRcdHwgQ29udGludWFsbHkgYnVpbGQgaW4gcmVzcG9uc2UgdG8gY2hhbmdlcyB0byBgaW4tZGlyYC5cblx0XHR8IFRoZXJlJ3MgY3VycmVudGx5IG5vIHdheSB0byB0dXJuIGl0IG9mZi4gSWYgeW91IGtub3cgb2YgYSBiZXR0ZXIgd2F0Y2ggcGFja2FnZSwgdGVsbCBtZSFcblx0XHQkIC4kYnVpbGQoKVxuXHRcdGluLWRpciBvdXQtZGlyID0gLm9wdGlvbnNcblx0XHQubG9nZ2VyLmxvZy13YXRjaCEgaW4tZGlyIG91dC1kaXJcblx0XHRub2RlLXdhdGNoIGluLWRpciB8ZnVsbC1pbi1wYXRoXG5cdFx0XHRyZWwtaW4tcGF0aCA9IHJlbGF0aXZlIGluLWRpciBmdWxsLWluLXBhdGhcblx0XHRcdCRkb25lLXdpdGgtYmVlcCBjYXNlXG5cdFx0XHRcdC5zaG91bGQtYnVpbGQtZmlsZT8gcmVsLWluLXBhdGhcblx0XHRcdFx0XHQuJGhhbmRsZS13YXRjaGVkISAoLnBhdGhzIHJlbC1pbi1wYXRoKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwgQGZvciBwYXRoIG9mIC5kZXBlbmRlbmNpZXMuZGVwZW5kZXJzIHJlbC1pbi1wYXRoXG5cdFx0XHRcdFx0XHQuJGhhbmRsZS1kZXBlbmRlciEgKC5wYXRocyBwYXRoKSByZWwtaW4tcGF0aFxuXG5cdCckc2VydmUgJHxcblx0XHR8IFNlcnZlIHRoZSBjb250ZW50cyBvZiBgb3V0LWRpci5cblx0XHR8IHJldHVybjogQW4gW0h0dHBTZXJ2ZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9pbmRleHplcm8vaHR0cC1zZXJ2ZXIpXG5cdFx0JCAuJHdhdGNoKClcblx0XHRvdXQtZGlyIHBvcnQgPSAub3B0aW9uc1xuXHRcdC5sb2dnZXIubG9nLXNlcnZlISBvdXQtZGlyIHBvcnRcblx0XHQoY3JlYXRlU2VydmVyIChyb290LiBvdXQtZGlyKSkubGlzdGVuIHBvcnRcblxuXHRteSAnJHdyaXRlLXN1YnRyZWUgJCF8cmVsLWluLWRpclxuXHRcdHBhdGhzID0gJigucGF0aHMgKGpvaW4gcmVsLWluLWRpciBfKSlcblx0XHQkICR0cmF2ZXJzZS1kaXItdHJlZSEgKGpvaW4gLm9wdGlvbnMuaW4tZGlyIHJlbC1pbi1kaXIpXG5cdFx0XHR0cmF2ZXJzZT8uIC4mc2hvdWxkLWJ1aWxkLWZpbGU/XG5cdFx0XHR8fCBUaGlzIG1ha2VzIHN1cmUgZW1wdHkgZGlycyBnZXQgY29waWVkIG92ZXIgdG9vLlxuXHRcdFx0JHRyYXZlcnNlLWRpciEuICYobWtkaXJzQXN5bmMgcGF0aHNfLmZ1bGwtb3V0LXBhdGgpXG5cdFx0XHQkdHJhdmVyc2UtZmlsZSEuICYoLiR3cml0ZS1zaW5nbGUhIHBhdGhzXylcblxuXHRteSAnJHdyaXRlLXNpbmdsZSEgJCF8cGF0aHNcblx0XHRleGNlcHRcblx0XHRcdHRyeVxuXHRcdFx0XHRkZXBlbmRlbmNpZXMgPSAkIC50cmFuc2Zvcm1lcnMuJHRyYW5zZm9ybSEgcGF0aHNcblx0XHRcdGNhdGNoXG5cdFx0XHRcdCQgLmxvZ2dlci4kbG9nLWVycm9yISBfXG5cdFx0XHRlbHNlXG5cdFx0XHRcdC5kZXBlbmRlbmNpZXMuK2RlcGVuZGVyISBwYXRocy5yZWwtaW4tcGF0aCBAZm9yIGRlcGVuZGVuY2llc1xuXHRcdFx0XHRcdHJlbGF0aXZlIC5vcHRpb25zLmluLWRpciBfXG5cblx0bXkgJyRoYW5kbGUtd2F0Y2hlZCEgJCF8cGF0aHNcblx0XHRzd2l0Y2ggJCAkcGF0aC1raW5kIHBhdGhzLmZ1bGwtaW4tcGF0aFxuXHRcdFx0J25vbmVcblx0XHRcdFx0LmxvZ2dlci5sb2ctZGVsZXRlISBwYXRoc1xuXHRcdFx0XHQuZGVwZW5kZW5jaWVzLi1kZXBlbmRlciEgcGF0aHMucmVsLWluLXBhdGhcblx0XHRcdFx0JCByZW1vdmVBc3luYyBwYXRocy5mdWxsLW91dC1wYXRoXG5cdFx0XHQnZGlyZWN0b3J5XG5cdFx0XHRcdC5sb2dnZXIubG9nLXdyaXRlISBwYXRoc1xuXHRcdFx0XHQkIC4kd3JpdGUtc3VidHJlZSBwYXRocy5yZWwtaW4tcGF0aFxuXHRcdFx0J2ZpbGVcblx0XHRcdFx0LmxvZ2dlci5sb2ctd3JpdGUhIHBhdGhzXG5cdFx0XHRcdCQgLiR3cml0ZS1zaW5nbGUhIHBhdGhzXG5cblx0bXkgJyRoYW5kbGUtZGVwZW5kZXIhICQhfHBhdGhzIGRlcGVuZGVuY3ktcGF0aFxuXHRcdHx8IE5lZWQgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZSBiZWNhdXNlIGl0IGNvdWxkIGhhdmUgYmVlbiBkZWxldGVkIGluIHRoZSBtZWFudGltZS5cblx0XHRpZiAkICRwYXRoLWV4aXN0cz8gcGF0aHMuZnVsbC1pbi1wYXRoXG5cdFx0XHQubG9nZ2VyLmxvZy1kZXBlbmRlbmN5ISBwYXRocyBkZXBlbmRlbmN5LXBhdGhcblx0XHRcdCQgLiR3cml0ZS1zaW5nbGUhIHBhdGhzXG5cblx0bXkgJ3Nob3VsZC1idWlsZC1maWxlPyB8aW4tZmlsZS1wYXRoXG5cdFx0bm90IChiYXNlbmFtZSBpbi1maWxlLXBhdGgpLnN0YXJ0c1dpdGggJ19cblxuXHRteSAncGF0aHMgfHJlbC1pbi1wYXRoXG5cdFx0bmV3IFBhdGhzIC50cmFuc2Zvcm1lcnMgLm9wdGlvbnMuaW4tZGlyIC5vcHRpb25zLm91dC1kaXIgcmVsLWluLXBhdGhcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
