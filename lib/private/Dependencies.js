"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","msl/lib/at/Map/multi-map","msl/lib/at/Map/Id-Map","msl/lib/at/q","msl/lib/at/Map/Map","msl/lib/at/Set/Id-Set"],(exports,_boot,multi_45map_0,Id_45Map_1,_63_2,Map_3,Id_45Set_4)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(multi_45map_0),add_45to_45_64_33=_ms.get(_$0,"add-to-@!"),Id_45Map=_ms.getDefaultExport(Id_45Map_1),_$1=_ms.getModule(_63_2),_63_45or=_ms.get(_$1,"?-or"),_$2=_ms.getModule(Map_3),_63get=_ms.get(_$2,"?get"),Id_45Set=_ms.getDefaultExport(Id_45Set_4);
	exports.default=class {
		constructor(){
			let _this=this;
			_this["-dependency->dependers"]=new (Id_45Map)();
			_this["-depender->dependencies"]=new (Id_45Map)()
		}
		dependers(dependency){
			let _this=this;
			return _63_45or(_63get(_this["-dependency->dependers"],dependency),[])
		}
		"+depender!"(depender,dependencies){
			let _this=this;
			_ms.setSub(_this["-depender->dependencies"],depender,dependencies);
			for(let dependency of dependencies){
				add_45to_45_64_33(_this["-dependency->dependers"],[dependency],Id_45Set)
			}
		}
		"-depender!"(depender){
			let _this=this;
			for(let dependency of _63_45or(_63get(_this["-depender->dependencies"],depender),[])){
				_ms.sub(_this["-dependency->dependers"],dependency).delete(depender)
			};
			_ms.del(_this["-depender->dependencies"],depender)
		}
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvRGVwZW5kZW5jaWVzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2lCQUlLO0VBSUssYUFBQTs7R0FBUixnQ0FBMkIsS0FBSTtHQUMvQixpQ0FBNEIsS0FBSTtFQUFBO1lBRXRCLFdBQ1U7O1VBR3BCLFNBQU0sT0FBSyxnQ0FBd0IsWUFBWTtFQUFBO2VBRW5DLFNBQVMsYUFDWTs7Y0FHakMsaUNBQXlCLFNBQWE7R0FDbEMsUUFBQSxjQUFjLGFBQ1k7SUFBN0Isa0JBQVUsZ0NBQXdCLENBQUMsWUFBWTtHQUFBO0VBQUE7ZUFFcEMsU0FDUTs7R0FJaEIsUUFBQSxjQUFjLFNBQU0sT0FBSyxpQ0FBeUIsVUFBVSxJQUNFO1lBQWpFLGdDQUF3QixtQkFBbUI7R0FBQTtXQUN4QyxpQ0FBeUI7RUFBQTtDQUFBIiwiZmlsZSI6InByaXZhdGUvRGVwZW5kZW5jaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0XG5cdG1zbC5saWIuQC5NYXAubXVsdGktbWFwIGFkZC10by1AIVxuXG5jbGFzc1xuXHR8IEtlZXBzIHRyYWNrIG9mIGFsbCB0aGUgZmlsZXMgdGhhdCBkZXBlbmQgb24gZWFjaCBkZXBlbmRlbmN5LlxuXHR8IChBIGRlcGVuZGVuY3kgaXMgYSBmaWxlIHdob3NlIG5hbWUgc3RhcnRzIHdpdGggYF9gLilcblxuXHRjb25zdHJ1Y3Rcblx0XHQuLWRlcGVuZGVuY3ktPmRlcGVuZGVycyA6PSBuZXcgSWQtTWFwXG5cdFx0Li1kZXBlbmRlci0+ZGVwZW5kZW5jaWVzIDo9IG5ldyBJZC1NYXBcblxuXHRkZXBlbmRlcnMgXFxkZXBlbmRlbmN5XG5cdFx0fCBBbGwgZmlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIGRlcGVuZGVuY3kuXG5cdFx0fCBkZXBlbmRlbmN5OiBQYXRoIHJlbGF0aXZlIHRvIGBpbi1kaXJgXG5cdFx0dG9kbyBtdWx0aSBtYXAgZ2V0XG5cdFx0Py1vciAoP2dldCAuLWRlcGVuZGVuY3ktPmRlcGVuZGVycyBkZXBlbmRlbmN5KSBbXVxuXG5cdCtkZXBlbmRlciEgIVxcZGVwZW5kZXIgZGVwZW5kZW5jaWVzXG5cdFx0fCBBY2tub3dsZWRnZSB0aGUgZGVwZW5kZW5jaWVzIG9mIGEgZmlsZS5cblx0XHR8IGRlcGVuZGVyOiBQYXRoIHJlbGF0aXZlIHRvIGBpbi1kaXJgXG5cdFx0fCBkZXBlbmRlbmNpZXM6IFBhdGhzIHJlbGF0aXZlIHRvIGBpbi1kaXJgXG5cdFx0Li1kZXBlbmRlci0+ZGVwZW5kZW5jaWVzW2RlcGVuZGVyXSA6PSBkZXBlbmRlbmNpZXNcblx0XHRmb3IgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXNcblx0XHRcdGFkZC10by1AISAuLWRlcGVuZGVuY3ktPmRlcGVuZGVycyBbZGVwZW5kZW5jeV0gSWQtU2V0XG5cblx0LWRlcGVuZGVyISAhXFxkZXBlbmRlclxuXHRcdHwgUmVtb3ZlIGEgZGVwZW5kZXIgZnJvbSB0aGUgbWFwLlxuXHRcdHwgSXQgd29uJ3QgYmUgcmV0dXJuZWQgZnJvbSBgZGVwZW5kZXJzYCBhbnkgbW9yZS5cblx0XHR8IGRlcGVuZGVyOiBQYXRoIHJlbGF0aXZlIHRvIGBpbi1kaXJgXG5cdFx0dG9kbyBtdWx0aSBtYXAgZ2V0XG5cdFx0Zm9yIGRlcGVuZGVuY3kgb2YgPy1vciAoP2dldCAuLWRlcGVuZGVyLT5kZXBlbmRlbmNpZXMgZGVwZW5kZXIpIFtdXG5cdFx0XHQuLWRlcGVuZGVuY3ktPmRlcGVuZGVyc1tkZXBlbmRlbmN5XS5kZWxldGUgZGVwZW5kZXJcblx0XHRkZWwgLi1kZXBlbmRlci0+ZGVwZW5kZW5jaWVzW2RlcGVuZGVyXVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
