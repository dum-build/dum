"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","msl/dist/at/Map/multi-map","msl/dist/at/Map/Id-Map","msl/dist/at/q","msl/dist/at/Map/Map","msl/dist/at/Set/Id-Set"],(exports,_boot,multi_45map_0,Id_45Map_1,_63_2,Map_3,Id_45Set_4)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(multi_45map_0),add_45to_45_64_33=_ms.get(_$0,"add-to-@!"),Id_45Map=_ms.getDefaultExport(Id_45Map_1),_$1=_ms.getModule(_63_2),_63_45or=_ms.get(_$1,"?-or"),_$2=_ms.getModule(Map_3),_63get=_ms.get(_$2,"?get"),Id_45Set=_ms.getDefaultExport(Id_45Set_4);
	exports.default=class {
		constructor(){
			let _this=this;
			_ms.newProperty(_this,"-dependency->dependers",new (Id_45Map)());
			_ms.newProperty(_this,"-depender->dependencies",new (Id_45Map)())
		}
		dependers(dependency){
			let _this=this;
			return _63_45or(_63get(_this["-dependency->dependers"],dependency),[])
		}
		"+depender!"(depender,dependencies){
			let _this=this;
			_ms.setSub(_this["-depender->dependencies"],depender,dependencies,"init");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvRGVwZW5kZW5jaWVzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2lCQUlLO0VBSUs7T0F3Qko7bUJBQUEsK0JBeEJzQixLQUFJO21CQXdCMUIsZ0NBdkJ1QixLQUFJO0VBQUE7WUFFcEI7T0FxQlA7VUFqQkosU0FBTSxPQWlCRixnQ0FqQitCLFlBQVk7RUFBQTtlQUVsQyxTQUFTO09BZWxCO2NBQUEsaUNBWHFCLFNBQVk7R0FDakMsUUFBQSxjQUFjLGFBQ1k7SUFBN0Isa0JBU0csZ0NBVCtCLENBQUMsWUFBWTtHQUFBO0VBQUE7ZUFFbkM7T0FPVDtHQUZBLFFBQUEsY0FBYyxTQUFNLE9BRXBCLGlDQUZrRCxVQUFVLElBQ0U7WUFDOUQsZ0NBRHFCLG1CQUFtQjtHQUFBO1dBQ3hDLGlDQUF5QjtFQUFBO0NBQUEiLCJmaWxlIjoicHJpdmF0ZS9EZXBlbmRlbmNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0bXNsLmRpc3QuQC5NYXAubXVsdGktbWFwIGFkZC10by1AIVxuXG5jbGFzc1xuXHR8IEtlZXBzIHRyYWNrIG9mIGFsbCB0aGUgZmlsZXMgdGhhdCBkZXBlbmQgb24gZWFjaCBkZXBlbmRlbmN5LlxuXHR8IChBIGRlcGVuZGVuY3kgaXMgYSBmaWxlIHdob3NlIG5hbWUgc3RhcnRzIHdpdGggYF9gLilcblxuXHRjb25zdHJ1Y3Rcblx0XHQuLWRlcGVuZGVuY3ktPmRlcGVuZGVycyA9IG5ldyBJZC1NYXBcblx0XHQuLWRlcGVuZGVyLT5kZXBlbmRlbmNpZXMgPSBuZXcgSWQtTWFwXG5cblx0J2RlcGVuZGVycyB8ZGVwZW5kZW5jeVxuXHRcdHwgQWxsIGZpbGVzIHRoYXQgZGVwZW5kIG9uIHRoZSBkZXBlbmRlbmN5LlxuXHRcdHwgZGVwZW5kZW5jeTogUGF0aCByZWxhdGl2ZSB0byBgaW4tZGlyYFxuXHRcdHRvZG8gbXVsdGkgbWFwIGdldFxuXHRcdD8tb3IgKD9nZXQgLi1kZXBlbmRlbmN5LT5kZXBlbmRlcnMgZGVwZW5kZW5jeSkgW11cblxuXHQnK2RlcGVuZGVyISAhfGRlcGVuZGVyIGRlcGVuZGVuY2llc1xuXHRcdHwgQWNrbm93bGVkZ2UgdGhlIGRlcGVuZGVuY2llcyBvZiBhIGZpbGUuXG5cdFx0fCBkZXBlbmRlcjogUGF0aCByZWxhdGl2ZSB0byBgaW4tZGlyYFxuXHRcdHwgZGVwZW5kZW5jaWVzOiBQYXRocyByZWxhdGl2ZSB0byBgaW4tZGlyYFxuXHRcdC4tZGVwZW5kZXItPmRlcGVuZGVuY2llc1tkZXBlbmRlcl0gPSBkZXBlbmRlbmNpZXNcblx0XHRmb3IgZGVwZW5kZW5jeSBvZiBkZXBlbmRlbmNpZXNcblx0XHRcdGFkZC10by1AISAuLWRlcGVuZGVuY3ktPmRlcGVuZGVycyBbZGVwZW5kZW5jeV0gSWQtU2V0XG5cblx0Jy1kZXBlbmRlciEgIXxkZXBlbmRlclxuXHRcdHwgUmVtb3ZlIGEgZGVwZW5kZXIgZnJvbSB0aGUgbWFwLlxuXHRcdHwgSXQgd29uJ3QgYmUgcmV0dXJuZWQgZnJvbSBgZGVwZW5kZXJzYCBhbnkgbW9yZS5cblx0XHR8IGRlcGVuZGVyOiBQYXRoIHJlbGF0aXZlIHRvIGBpbi1kaXJgXG5cdFx0dG9kbyBtdWx0aSBtYXAgZ2V0XG5cdFx0Zm9yIGRlcGVuZGVuY3kgb2YgPy1vciAoP2dldCAuLWRlcGVuZGVyLT5kZXBlbmRlbmNpZXMgZGVwZW5kZXIpIFtdXG5cdFx0XHQuLWRlcGVuZGVuY3ktPmRlcGVuZGVyc1tkZXBlbmRlbmN5XS5kZWxldGUgZGVwZW5kZXJcblx0XHRkZWwgLi1kZXBlbmRlci0+ZGVwZW5kZW5jaWVzW2RlcGVuZGVyXVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
