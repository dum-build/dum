"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","fs-extra-promise","path","msl/lib/js","msl/lib/at/at"],(exports,_boot,fs_45extra_45promise_0,path_1,js_2,_64_3)=>{
	_ms.getModule(_boot);
	let _$1=_ms.getModule(fs_45extra_45promise_0),isDirectoryAsync=_ms.get(_$1,"isDirectoryAsync"),readdirAsync=_ms.get(_$1,"readdirAsync"),statAsync=_ms.get(_$1,"statAsync"),_$2=_ms.getModule(path_1),join=_ms.get(_$2,"join"),_$3=_ms.getModule(js_2),defined_63=_ms.get(_$3,"defined?"),_$4=_ms.getModule(_64_3),_64keep=_ms.get(_$4,"@keep");
	let $path_45exists_63=exports["$path-exists?"]=function $path_45exists_63(path){
		return _ms.async(function*(){
			return ! _ms.eq("none",(yield $path_45kind(path)))
		})
	};
	let $path_45kind=exports["$path-kind"]=function $path_45kind(path){
		return _ms.async(function*(){
			return (yield* function*(){
				try {
					let stats=(yield statAsync(path));
					return (stats.isDirectory()?"directory":"file")
				}catch(_){
					if(! _.message.startsWith("ENOENT"))throw _;
					return "none"
				}
			}())
		})
	};
	let $traverse_45dir_45tree_33=exports["$traverse-dir-tree!"]=function $traverse_45dir_45tree_33(dir_45path,opts){
		return _ms.async(function*(){
			let _$0=opts,traverse_63=_$0["traverse?"],$traverse_45dir_33=_$0["$traverse-dir!"],$traverse_45file_33=_$0["$traverse-file!"];
			let $recur_33=function $recur_33(rel_45dir){
				return _ms.async(function*(){
					let full_45dir_45path=join(dir_45path,rel_45dir);
					let contents=(yield readdirAsync(full_45dir_45path));
					let used_45contents=(defined_63(traverse_63)?_64keep(contents,traverse_63):contents);
					(yield _ms.$for(used_45contents,function*(sub_45name){
						let full_45path=join(full_45dir_45path,sub_45name);
						let rel_45path=join(rel_45dir,sub_45name);
						return (yield* function*(){
							if((yield isDirectoryAsync(full_45path))){
								return (yield Promise.all((yield* function*(){
									let built=[];
									_ms.add(built,$traverse_45dir_33(rel_45path));
									_ms.add(built,$recur_33(rel_45path));
									return built
								}())))
							} else {
								return (yield $traverse_45file_33(rel_45path))
							}
						}())
					}))
				})
			};
			$recur_33(``)
		})
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvZnMtdXRpbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQUlBLCtDQUFpQiwyQkFBQTs4QkFDSTtVQUNwQixTQUFRLE9BQUssT0FBRSxhQUFXO0VBQUE7Q0FBQTtDQUczQix1Q0FBYyxzQkFBQTs4QkFDSTtVQUVYO1FBQ0Y7S0FBRixVQUFRLE9BQUUsVUFBVTtZQUNmLENBQUEsb0JBQXFCLFlBQVc7SUFBQSxTQUN0QztLQUNRLEtBQUMscUJBQXFCLGdCQUFjO1lBQzFDO0lBQUE7R0FBQTtFQUFBO0NBQUE7Q0FFSiw2REFBd0IsbUNBQUEsV0FBUzs4QkFDSTtHQUVwQyxRQUE2QztHQUM3QyxjQUFhLG1CQUFBO2dDQUNPO0tBQW5CLHNCQUFnQixLQUFLLFdBQVM7S0FDOUIsYUFBVyxPQUFFLGFBQWE7S0FDMUIsb0JBQXFCLENBQUMsV0FBUyxhQUFZLFFBQU0sU0FBUyxhQUFXO3FCQUNwRCwwQkFBWixXQUN5QjtNQUE3QixnQkFBWSxLQUFLLGtCQUFjO01BQy9CLGVBQVcsS0FBSyxVQUFRO2FBRXBCO09BQUgsR0FBQSxPQUFFLGlCQUFpQixjQUNTO2VBQTNCLE9BQUUsWUFDVyxtQkFBQTs7dUJBQVYsbUJBQWU7dUJBQ2YsVUFBUTs7O2NBRVI7ZUFBSCxPQUFFLG9CQUFnQjtPQUFBO01BQUE7S0FBQTtJQUFBO0dBQUE7R0FDdEIsVUFBUyIsImZpbGUiOiJwcml2YXRlL2ZzLXV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0ZnMtZXh0cmEtcHJvbWlzZSBpc0RpcmVjdG9yeUFzeW5jIHJlYWRkaXJBc3luYyBzdGF0QXN5bmNcblx0cGF0aCBqb2luXG5cbiRwYXRoLWV4aXN0cz8uICRcXHBhdGhcblx0fCBXaGV0aGVyIGFueXRoaW5nIGV4aXN0cyBhdCB0aGUgcGF0aC5cblx0bm90ID0/ICdub25lICQgJHBhdGgta2luZCBwYXRoXG5cbnRvZG8gU1lOVEFYIGVudW0gZm9yIHJldHVybiB2YWx1ZVxuJHBhdGgta2luZC4gJFxccGF0aFxuXHR8IFdoZXRoZXIgdGhlIHBhdGggaXMgYSBkaXJlY3RvcnksIGZpbGUsIG9yIGRvZXMgbm90IGV4aXN0LlxuXHRleGNlcHRcblx0XHR0cnlcblx0XHRcdHN0YXRzID0gJCBzdGF0QXN5bmMgcGF0aFxuXHRcdFx0Y29uZCBzdGF0cy5pc0RpcmVjdG9yeSgpICdkaXJlY3RvcnkgJ2ZpbGVcblx0XHRjYXRjaFxuXHRcdFx0YXNzZXJ0IF8ubWVzc2FnZS5zdGFydHNXaXRoICdFTk9FTlQgdGhyb3cgX1xuXHRcdFx0J25vbmVcblxuJHRyYXZlcnNlLWRpci10cmVlIS4gJCFcXGRpci1wYXRoIG9wdHNcblx0fCBDYWxscyBgJHRyYXZlcnNlLWRpciFgIG9uIGV2ZXJ5IGRpcmVjdG9yeSBhbmQgYCR0cmF2ZXJzZS1maWxlIWAgb24gZXZlcnkgZmlsZS5cblx0fCBBdm9pZHMgYSBmaWxlIG9yIGRpcmVjdG9yeSAoYW5kIGFsbCBmaWxlcyBpbiBpdCkgd2hlbiBgZmlsdGVyKHBhdGgpYCByZXR1cm5zIGZhbHNlLlxuXHR7dHJhdmVyc2U/ICR0cmF2ZXJzZS1kaXIhICR0cmF2ZXJzZS1maWxlIX0gPSBvcHRzXG5cdCRyZWN1ciEgPSAkIVxccmVsLWRpclxuXHRcdGZ1bGwtZGlyLXBhdGggPSBqb2luIGRpci1wYXRoIHJlbC1kaXJcblx0XHRjb250ZW50cyA9ICQgcmVhZGRpckFzeW5jIGZ1bGwtZGlyLXBhdGhcblx0XHR1c2VkLWNvbnRlbnRzID0gY29uZCAoZGVmaW5lZD8gdHJhdmVyc2U/KSAoQGtlZXAgY29udGVudHMgdHJhdmVyc2U/KSBjb250ZW50c1xuXHRcdCRmb3Igc3ViLW5hbWUgb2YgdXNlZC1jb250ZW50c1xuXHRcdFx0ZnVsbC1wYXRoID0gam9pbiBmdWxsLWRpci1wYXRoIHN1Yi1uYW1lXG5cdFx0XHRyZWwtcGF0aCA9IGpvaW4gcmVsLWRpciBzdWItbmFtZVxuXHRcdFx0Y2FzZVxuXHRcdFx0XHQkIGlzRGlyZWN0b3J5QXN5bmMgZnVsbC1wYXRoXG5cdFx0XHRcdFx0JCBQcm9taXNlLmFsbFxuXHRcdFx0XHRcdFx0LiAkdHJhdmVyc2UtZGlyISByZWwtcGF0aFxuXHRcdFx0XHRcdFx0LiAkcmVjdXIhIHJlbC1wYXRoXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQkICR0cmF2ZXJzZS1maWxlISByZWwtcGF0aFxuXHQkcmVjdXIhIFwiXCJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
