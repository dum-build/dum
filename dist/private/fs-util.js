"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","fs-extra-promise","path","msl/dist/compare","msl/dist/js","msl/dist/at/at"],(exports,_boot,fs_45extra_45promise_0,path_1,compare_2,js_3,_64_4)=>{
	_ms.getModule(_boot);
	let _$1=_ms.getModule(fs_45extra_45promise_0),isDirectoryAsync=_ms.get(_$1,"isDirectoryAsync"),readdirAsync=_ms.get(_$1,"readdirAsync"),statAsync=_ms.get(_$1,"statAsync"),_$2=_ms.getModule(path_1),join=_ms.get(_$2,"join"),_$3=_ms.getModule(compare_2),_61_63=_ms.get(_$3,"=?"),_$4=_ms.getModule(js_3),defined_63=_ms.get(_$4,"defined?"),_$5=_ms.getModule(_64_4),_64keep=_ms.get(_$5,"@keep");
	let $path_45exists_63=exports["$path-exists?"]=function $path_45exists_63(path){
		return _ms.async(function*(){
			return ! _61_63("none",(yield $path_45kind(path)))
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
			$recur_33("")
		})
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvZnMtdXRpbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztDQUlBLCtDQUFpQiwyQkFBQTs7VUFFaEIsRUFBSSxPQUFJLE9BQUssT0FBRSxhQUFXO0VBQUE7Q0FBQTtDQUczQix1Q0FBYyxzQkFBQTs7VUFHUDtRQUNGO0tBQUYsVUFBUSxPQUFFLFVBQVU7WUFDZixDQUFBLG9CQUFxQixZQUFXO0lBQUEsU0FDdEM7S0FDUSxLQUFDLHFCQUFxQixnQkFBYztZQUMxQztJQUFBO0dBQUE7RUFBQTtDQUFBO0NBRUosNkRBQXdCLG1DQUFBLFdBQVM7O0dBR2hDLFFBQTJDO0dBQzNDLGNBQWEsbUJBQUE7O0tBQ1osc0JBQWdCLEtBQUssV0FBUztLQUM5QixhQUFXLE9BQUUsYUFBYTtLQUMxQixvQkFBcUIsQ0FBQyxXQUFTLGFBQVksUUFBTSxTQUFTLGFBQVc7cUJBQ3BELDBCQUFaLFdBQ3lCO01BQTdCLGdCQUFZLEtBQUssa0JBQWM7TUFDL0IsZUFBVyxLQUFLLFVBQVE7YUFFcEI7T0FBSCxHQUFBLE9BQUUsaUJBQWlCLGNBQ1M7ZUFBM0IsT0FBRSxZQUNXLG1CQUFBOzt1QkFBVixtQkFBZTt1QkFDZixVQUFROzs7Y0FFUjtlQUFILE9BQUUsb0JBQWdCO09BQUE7TUFBQTtLQUFBO0lBQUE7R0FBQTtHQUN0QixVQUFTO0VBQUE7Q0FBQSIsImZpbGUiOiJwcml2YXRlL2ZzLXV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0ZnMtZXh0cmEtcHJvbWlzZSBpc0RpcmVjdG9yeUFzeW5jIHJlYWRkaXJBc3luYyBzdGF0QXN5bmNcblx0cGF0aCBqb2luXG5cbiRwYXRoLWV4aXN0cz8uICR8cGF0aFxuXHR8IFdoZXRoZXIgYW55dGhpbmcgZXhpc3RzIGF0IHRoZSBwYXRoLlxuXHRub3QgPT8gJ25vbmUgJCAkcGF0aC1raW5kIHBhdGhcblxudG9kbyBTWU5UQVggZW51bSBmb3IgcmV0dXJuIHZhbHVlXG4kcGF0aC1raW5kLiAkfHBhdGhcblx0fCBXaGV0aGVyIHRoZSBwYXRoIGlzIGEgZGlyZWN0b3J5LCBmaWxlLCBvciBkb2VzIG5vdCBleGlzdC5cblx0ZXhjZXB0XG5cdFx0dHJ5XG5cdFx0XHRzdGF0cyA9ICQgc3RhdEFzeW5jIHBhdGhcblx0XHRcdGNvbmQgc3RhdHMuaXNEaXJlY3RvcnkoKSAnZGlyZWN0b3J5ICdmaWxlXG5cdFx0Y2F0Y2hcblx0XHRcdGFzc2VydCBfLm1lc3NhZ2Uuc3RhcnRzV2l0aCAnRU5PRU5UIHRocm93IF9cblx0XHRcdCdub25lXG5cbiR0cmF2ZXJzZS1kaXItdHJlZSEuICQhfGRpci1wYXRoIG9wdHNcblx0fCBDYWxscyBgJHRyYXZlcnNlLWRpciFgIG9uIGV2ZXJ5IGRpcmVjdG9yeSBhbmQgYCR0cmF2ZXJzZS1maWxlIWAgb24gZXZlcnkgZmlsZS5cblx0fCBBdm9pZHMgYSBmaWxlIG9yIGRpcmVjdG9yeSAoYW5kIGFsbCBmaWxlcyBpbiBpdCkgd2hlbiBgZmlsdGVyKHBhdGgpYCByZXR1cm5zIGZhbHNlLlxuXHR0cmF2ZXJzZT8gJHRyYXZlcnNlLWRpciEgJHRyYXZlcnNlLWZpbGUhID0gb3B0c1xuXHQkcmVjdXIhID0gJCF8cmVsLWRpclxuXHRcdGZ1bGwtZGlyLXBhdGggPSBqb2luIGRpci1wYXRoIHJlbC1kaXJcblx0XHRjb250ZW50cyA9ICQgcmVhZGRpckFzeW5jIGZ1bGwtZGlyLXBhdGhcblx0XHR1c2VkLWNvbnRlbnRzID0gY29uZCAoZGVmaW5lZD8gdHJhdmVyc2U/KSAoQGtlZXAgY29udGVudHMgdHJhdmVyc2U/KSBjb250ZW50c1xuXHRcdCRmb3Igc3ViLW5hbWUgb2YgdXNlZC1jb250ZW50c1xuXHRcdFx0ZnVsbC1wYXRoID0gam9pbiBmdWxsLWRpci1wYXRoIHN1Yi1uYW1lXG5cdFx0XHRyZWwtcGF0aCA9IGpvaW4gcmVsLWRpciBzdWItbmFtZVxuXHRcdFx0Y2FzZVxuXHRcdFx0XHQkIGlzRGlyZWN0b3J5QXN5bmMgZnVsbC1wYXRoXG5cdFx0XHRcdFx0JCBQcm9taXNlLmFsbFxuXHRcdFx0XHRcdFx0LiAkdHJhdmVyc2UtZGlyISByZWwtcGF0aFxuXHRcdFx0XHRcdFx0LiAkcmVjdXIhIHJlbC1wYXRoXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQkICR0cmF2ZXJzZS1maWxlISByZWwtcGF0aFxuXHQkcmVjdXIhIFwiXCJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
