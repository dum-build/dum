"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","fs-extra-promise","http-server","node-watch","path","./private/Dependencies","./private/fs-util","./private/Logger","./private/Options","./private/Paths","./private/Transformers","./private/util","msl/lib/at/q"],(exports,_boot,fs_45extra_45promise_0,http_45server_1,node_45watch_2,path_3,Dependencies_4,fs_45util_5,Logger_6,Options_7,Paths_8,Transformers_9,util_10,_63_11)=>{
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
			this.options=options;
			_this.transformers=new (Transformers)(_this.options);
			_this.logger=new (Logger)(_this.options);
			_this.dependencies=new (Dependencies)()
		}
		$build(){
			let _this=this;
			return _ms.async(function*(){
				let _$0=_this.options,in_45dir=_$0["in-dir"],out_45dir=_$0["out-dir"],package_45dir=_$0["package-dir"],_63bower=_$0["?bower"];
				_this.logger["log-build!"](in_45dir,out_45dir);
				(yield emptyDirAsync(out_45dir));
				let $tree=_this["$write-subtree"](``);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL0R1bS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQWNBLHdCQUNVO0VBQ1IsWUFBTzs7K0JBQ1c7V0FFakIsS0FBSSxLQUFJLE9BQUUsYUFBYTtHQUFBO0VBQUE7RUFFZixZQUFBLFFBQ1E7OztHQUFqQixtQkFBaUIsS0FBSSxjQUFhO0dBQ2xDLGFBQVcsS0FBSSxRQUFPO0dBQ3RCLG1CQUFpQixLQUFJO0VBQUE7OzsrQkFHWjtJQUNULFFBQXNDO0lBQ3RDLDJCQUFtQixTQUFPO1dBQ3hCLGNBQWM7SUFDaEIsVUFBUSx3QkFBaUI7V0FDdkIsV0FBTyxTQUFPLE1BQVEsR0FDQTtLQUF2QixnQkFBWSxLQUFLLGNBQWE7S0FDOUIsc0JBQWdCLEtBQUssVUFBUztLQUM5QiwyQkFBb0IsWUFBUztLQUM3QixrQkFBYyxVQUFVLFlBQVcsS0FBSyxjQUFZO1lBQ3BELFlBQVksQ0FBQyxNQUFNO0lBQUE7R0FBQTtFQUFBOzs7K0JBR1g7V0FFUDtJQUNGLFFBQW1CO0lBQ25CLDJCQUFtQixTQUFPO0lBQzFCLGFBQVcsU0FBUSxrQkFDWTtLQUE5QixvQkFBYyxTQUFTLFNBQU87WUFDOUIsb0JBQ29CO01BQW5CLEdBQUEsNEJBQW9CLGlCQUNXO2NBQTlCLDBCQUFtQixZQUFPO01BQUEsT0FFdkI7Y0FBSCxZQUFpQjs7Z0JBQUEsUUFBUSw2QkFBd0IsaUJBQ1c7U0FBM0QsMkJBQW9CLFlBQU8sTUFBTTtRQUFBOzs7Ozs7Ozs7OytCQUc3QjtXQUVOO0lBQ0YsUUFBaUI7SUFDakIsMkJBQW1CLFVBQVE7V0FDMUIsYUFBYTtVQUFPO0lBQUEsVUFBaUI7R0FBQTtFQUFBO21CQUVsQjs7K0JBQ1U7SUFBOUIsYUFBVSxZQUFRLEtBQUssZUFBWTtXQUNqQywwQkFBcUIsS0FBSyx3QkFBZ0IsZ0JBQ1csbUJBQUE7O0tBQXRELG1EQUFZO0tBRVosa0RBQWtCLFlBQVksTUFBTTtLQUNwQyxvREFBbUIsd0JBQWdCLE1BQU07Ozs7O21CQUV0Qjs7K0JBQ0s7SUFDbkI7SUFBQSxJQUtEO0tBSkgsaUJBQWUsT0FBRSxrQ0FBMEI7O0tBSTNDLGlDQUF5QixxQkFBdUI7O2NBQUEsS0FBQSxhQUNZO09BQTNELFNBQVMsd0JBQWlCO01BQUE7OzthQUo1Qjs7WUFDRyw0QkFBcUI7SUFBQTtHQUFBO0VBQUE7cUJBS0g7OytCQUNLO0lBQXBCLE9BQUEsT0FBRSxhQUFXO0tBQ25CLEtBQUMsT0FDSTtNQUFKLDRCQUFvQjtNQUNwQixpQ0FBeUI7YUFDdkIsWUFBWTs7O0tBQ2YsS0FBQyxZQUNTO01BQVQsMkJBQW1CO2FBQ2pCLHdCQUFnQjs7O0tBQ25CLEtBQUMsT0FDSTtNQUFKLDJCQUFtQjthQUNqQix3QkFBZ0I7Ozs7Ozs7c0JBRUcsTUFBTTs7K0JBQ2U7SUFDekMsR0FBQSxPQUFFLGtCQUFjLHdCQUNrQjtLQUFwQyxnQ0FBd0IsTUFBTTtZQUM1Qix3QkFBZ0I7SUFBQTtHQUFBO0VBQUE7dUJBRUcsaUJBQ1k7O1VBQWxDLEVBQUssU0FBUyw2QkFBMkI7RUFBQTtRQUVoQyxnQkFDVzs7VUFBcEIsS0FBSSxPQUFNLG1CQUFjLHdCQUFnQix5QkFBaUI7RUFBQTtDQUFBIiwiZmlsZSI6IkR1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRmcy1leHRyYS1wcm9taXNlIGNvcHlBc3luYyBlbXB0eURpckFzeW5jIG1rZGlyc0FzeW5jIHJlbW92ZUFzeW5jXG5cdGh0dHAtc2VydmVyIGNyZWF0ZVNlcnZlclxuXHRub2RlLXdhdGNoXG5cdHBhdGggYmFzZW5hbWUgam9pbiByZWxhdGl2ZVxuXHQucHJpdmF0ZS5EZXBlbmRlbmNpZXNcblx0LnByaXZhdGUuZnMtdXRpbCAkcGF0aC1leGlzdHM/ICRwYXRoLWtpbmQgJHRyYXZlcnNlLWRpci10cmVlIVxuXHQucHJpdmF0ZS5Mb2dnZXJcblx0LnByaXZhdGUuT3B0aW9uc1xuXHQucHJpdmF0ZS5QYXRoc1xuXHQucHJpdmF0ZS5UcmFuc2Zvcm1lcnNcblx0LnByaXZhdGUudXRpbCAkZG9uZS13aXRoLWJlZXBcblxudG9kbyBTWU5UQVggU2hvdWxkbid0IGhhdmUgdG8gZXhwbGljaXRseSBhc3NpZ24gdG8gYER1bWBcbkR1bS4gY2xhc3Ncblx0c3RhdGljXG5cdFx0JG5ldyAkXFxwYWNrYWdlLWRpclxuXHRcdFx0fCBDcmVhdGVzIGEgbmV3IER1bSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIHBhY2thZ2UuXG5cdFx0XHR8IFRoaXMgbG9hZHMgb3B0aW9ucyBmcm9tIHRoZSBgcGFja2FnZS5qc29uYCB0aGVyZS5cblx0XHRcdG5ldyBEdW0gJCBPcHRpb25zLiRuZXcgcGFja2FnZS1kaXJcblxuXHRjb25zdHJ1Y3QgLm9wdGlvbnNcblx0XHQudHJhbnNmb3JtZXJzIDo9IG5ldyBUcmFuc2Zvcm1lcnMgLm9wdGlvbnNcblx0XHQubG9nZ2VyIDo9IG5ldyBMb2dnZXIgLm9wdGlvbnNcblx0XHQuZGVwZW5kZW5jaWVzIDo9IG5ldyBEZXBlbmRlbmNpZXNcblxuXHQkYnVpbGQgJCFcXFxuXHRcdHwgVHJhbnNmb3JtcyBgaW4tZGlyYCB0byBgb3V0LWRpcmAgYW5kIGNvcGllcyBgYm93ZXIuaW4tZGlyYCB0byBgYm93ZXIub3V0LWRpcmAuXG5cdFx0e2luLWRpciBvdXQtZGlyIHBhY2thZ2UtZGlyID9ib3dlcn0gPSAub3B0aW9uc1xuXHRcdC5sb2dnZXIubG9nLWJ1aWxkISBpbi1kaXIgb3V0LWRpclxuXHRcdCQgZW1wdHlEaXJBc3luYyBvdXQtZGlyXG5cdFx0JHRyZWUgPSAuJHdyaXRlLXN1YnRyZWUgXCJcIlxuXHRcdCQgPy1jb25kID9ib3dlciAkdHJlZSBcXF9cblx0XHRcdGJvd2VyLWRpciA9IGpvaW4gcGFja2FnZS1kaXIgXy5pbi1kaXJcblx0XHRcdGZ1bGwtb3V0LXBhdGggPSBqb2luIG91dC1kaXIgXy5vdXQtZGlyXG5cdFx0XHQubG9nZ2VyLmxvZy1ib3dlciEgXy5pbi1kaXIgXy5vdXQtZGlyXG5cdFx0XHQkYm93ZXItY29weSA9IGNvcHlBc3luYyBib3dlci1kaXIgKGpvaW4gcGFja2FnZS1kaXIgZnVsbC1vdXQtcGF0aClcblx0XHRcdFByb21pc2UuYWxsIFskdHJlZSAkYm93ZXItY29weV1cblxuXHQkd2F0Y2ggJCFcXFxuXHRcdHwgQ29udGludWFsbHkgYnVpbGQgaW4gcmVzcG9uc2UgdG8gY2hhbmdlcyB0byBgaW4tZGlyYC5cblx0XHR8IFRoZXJlJ3MgY3VycmVudGx5IG5vIHdheSB0byB0dXJuIGl0IG9mZi4gSWYgeW91IGtub3cgb2YgYSBiZXR0ZXIgd2F0Y2ggcGFja2FnZSwgdGVsbCBtZSFcblx0XHQkIC4kYnVpbGQoKVxuXHRcdHtpbi1kaXIgb3V0LWRpcn0gPSAub3B0aW9uc1xuXHRcdC5sb2dnZXIubG9nLXdhdGNoISBpbi1kaXIgb3V0LWRpclxuXHRcdG5vZGUtd2F0Y2ggaW4tZGlyIFxcZnVsbC1pbi1wYXRoXG5cdFx0XHRyZWwtaW4tcGF0aCA9IHJlbGF0aXZlIGluLWRpciBmdWxsLWluLXBhdGhcblx0XHRcdCRkb25lLXdpdGgtYmVlcCBjYXNlXG5cdFx0XHRcdC5zaG91bGQtYnVpbGQtZmlsZT8gcmVsLWluLXBhdGhcblx0XHRcdFx0XHQuJGhhbmRsZS13YXRjaGVkISAoLnBhdGhzIHJlbC1pbi1wYXRoKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwgQGZvciBwYXRoIG9mIC5kZXBlbmRlbmNpZXMuZGVwZW5kZXJzIHJlbC1pbi1wYXRoXG5cdFx0XHRcdFx0XHQuJGhhbmRsZS1kZXBlbmRlciEgKC5wYXRocyBwYXRoKSByZWwtaW4tcGF0aFxuXG5cdCRzZXJ2ZSAkXFxcblx0XHR8IFNlcnZlIHRoZSBjb250ZW50cyBvZiBgb3V0LWRpci5cblx0XHR8IHJldHVybjogQW4gW0h0dHBTZXJ2ZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9pbmRleHplcm8vaHR0cC1zZXJ2ZXIpXG5cdFx0JCAuJHdhdGNoKClcblx0XHR7b3V0LWRpciBwb3J0fSA9IC5vcHRpb25zXG5cdFx0LmxvZ2dlci5sb2ctc2VydmUhIG91dC1kaXIgcG9ydFxuXHRcdChjcmVhdGVTZXJ2ZXIge3Jvb3QuIG91dC1kaXJ9KS5saXN0ZW4gcG9ydFxuXG5cdG15ICR3cml0ZS1zdWJ0cmVlICQhXFxyZWwtaW4tZGlyXG5cdFx0cGF0aHMgPSAmKC5wYXRocyAoam9pbiByZWwtaW4tZGlyIF8pKVxuXHRcdCQgJHRyYXZlcnNlLWRpci10cmVlISAoam9pbiAub3B0aW9ucy5pbi1kaXIgcmVsLWluLWRpcilcblx0XHRcdHRyYXZlcnNlPy4gLiZzaG91bGQtYnVpbGQtZmlsZT9cblx0XHRcdHx8IFRoaXMgbWFrZXMgc3VyZSBlbXB0eSBkaXJzIGdldCBjb3BpZWQgb3ZlciB0b28uXG5cdFx0XHQkdHJhdmVyc2UtZGlyIS4gJihta2RpcnNBc3luYyBwYXRoc18uZnVsbC1vdXQtcGF0aClcblx0XHRcdCR0cmF2ZXJzZS1maWxlIS4gJiguJHdyaXRlLXNpbmdsZSEgcGF0aHNfKVxuXG5cdG15ICR3cml0ZS1zaW5nbGUhICQhXFxwYXRoc1xuXHRcdGV4Y2VwdFxuXHRcdFx0dHJ5XG5cdFx0XHRcdGRlcGVuZGVuY2llcyA9ICQgLnRyYW5zZm9ybWVycy4kdHJhbnNmb3JtISBwYXRoc1xuXHRcdFx0Y2F0Y2hcblx0XHRcdFx0JCAubG9nZ2VyLiRsb2ctZXJyb3IhIF9cblx0XHRcdGVsc2Vcblx0XHRcdFx0LmRlcGVuZGVuY2llcy4rZGVwZW5kZXIhIHBhdGhzLnJlbC1pbi1wYXRoIEBmb3IgZGVwZW5kZW5jaWVzXG5cdFx0XHRcdFx0cmVsYXRpdmUgLm9wdGlvbnMuaW4tZGlyIF9cblxuXHRteSAkaGFuZGxlLXdhdGNoZWQhICQhXFxwYXRoc1xuXHRcdHN3aXRjaCAkICRwYXRoLWtpbmQgcGF0aHMuZnVsbC1pbi1wYXRoXG5cdFx0XHQnbm9uZVxuXHRcdFx0XHQubG9nZ2VyLmxvZy1kZWxldGUhIHBhdGhzXG5cdFx0XHRcdC5kZXBlbmRlbmNpZXMuLWRlcGVuZGVyISBwYXRocy5yZWwtaW4tcGF0aFxuXHRcdFx0XHQkIHJlbW92ZUFzeW5jIHBhdGhzLmZ1bGwtb3V0LXBhdGhcblx0XHRcdCdkaXJlY3Rvcnlcblx0XHRcdFx0LmxvZ2dlci5sb2ctd3JpdGUhIHBhdGhzXG5cdFx0XHRcdCQgLiR3cml0ZS1zdWJ0cmVlIHBhdGhzLnJlbC1pbi1wYXRoXG5cdFx0XHQnZmlsZVxuXHRcdFx0XHQubG9nZ2VyLmxvZy13cml0ZSEgcGF0aHNcblx0XHRcdFx0JCAuJHdyaXRlLXNpbmdsZSEgcGF0aHNcblxuXHRteSAkaGFuZGxlLWRlcGVuZGVyISAkIVxccGF0aHMgZGVwZW5kZW5jeS1wYXRoXG5cdFx0fHwgTmVlZCB0byBjaGVjayBmb3IgZXhpc3RlbmNlIGJlY2F1c2UgaXQgY291bGQgaGF2ZSBiZWVuIGRlbGV0ZWQgaW4gdGhlIG1lYW50aW1lLlxuXHRcdGlmICQgJHBhdGgtZXhpc3RzPyBwYXRocy5mdWxsLWluLXBhdGhcblx0XHRcdC5sb2dnZXIubG9nLWRlcGVuZGVuY3khIHBhdGhzIGRlcGVuZGVuY3ktcGF0aFxuXHRcdFx0JCAuJHdyaXRlLXNpbmdsZSEgcGF0aHNcblxuXHRteSBzaG91bGQtYnVpbGQtZmlsZT8gXFxpbi1maWxlLXBhdGhcblx0XHRub3QgKGJhc2VuYW1lIGluLWZpbGUtcGF0aCkuc3RhcnRzV2l0aCAnX1xuXG5cdG15IHBhdGhzIFxccmVsLWluLXBhdGhcblx0XHRuZXcgUGF0aHMgLnRyYW5zZm9ybWVycyAub3B0aW9ucy5pbi1kaXIgLm9wdGlvbnMub3V0LWRpciByZWwtaW4tcGF0aFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
