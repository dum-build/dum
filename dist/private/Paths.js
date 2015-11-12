"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","path","msl/dist/at/q"],(exports,_boot,path_0,_63_1)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(path_0),join=_ms.get(_$0,"join"),parse=_ms.get(_$0,"parse"),_$1=_ms.getModule(_63_1),_63_45cond=_ms.get(_$1,"?-cond");
	let Paths=exports.default=class Paths{
		constructor(transformers,in_45dir,out_45dir,rel_45in_45path){
			let _this=this;
			_ms.newProperty(this,"rel-in-path",rel_45in_45path);
			_ms.newProperty(_this,"full-in-path",join(in_45dir,rel_45in_45path));
			let p=parse(rel_45in_45path);
			_ms.newProperty(_this,"in-extension",p.ext);
			let out_45name=_63_45cond(transformers["?out-extension"](_this["in-extension"]),p.name,ext=>{
				return `${p.name}.${ext}`
			});
			_ms.newProperty(_this,"rel-out-path",mangle_45path(join(p.dir,out_45name)));
			_ms.newProperty(_this,"full-out-path",join(out_45dir,_this["rel-out-path"]))
		}
	};
	let mangle_45path=function mangle_45path(path){
		let replacements=(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,"!","bang");
			_ms.setSub(built,"@","at");
			_ms.setSub(built,`\\?`,"q");
			_ms.setSub(built,`\\$`,"cash");
			return built
		})();
		for(let _ of replacements){
			path=path.replace(new (RegExp)(_ms.sub(_,0),"g"),_ms.sub(_,1))
		};
		return path
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvUGF0aHMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FHQSwwQkFDWTtFQU9ELFlBQUEsYUFBYSxTQUFPLFVBQVE7T0FVUDs7bUJBQUEscUJBVGQsS0FBSyxTQUFPO0dBRzVCLE1BQUksTUFBTTttQkFNb0IscUJBTGQ7R0FFaEIsZUFBVyxXQUFRLCtCQUdXLHVCQUhnQyxPQUFRO1dBQ3BFLEdBQUUsVUFBUzs7bUJBRWlCLHFCQURkLGNBQWEsS0FBSyxNQUFNO21CQUNWLHNCQUFiLEtBQUssVUFBUTs7O0NBRWhDLGtCQUFlLHVCQUFBO0VBRWQsaUJBQ2MsS0FBQTs7b0JBQVosSUFBTTtvQkFDTixJQUFNO29CQUNOLE1BQVM7b0JBQ1QsTUFBUzs7O0VBQ1AsUUFBQSxLQUFBLGFBQ1k7UUFDUCxhQUFjLEtBQUksZ0JBQVEsRUFBQyxHQUFJLGFBQUksRUFBQztFQUFBO1NBQzdDO0NBQUEiLCJmaWxlIjoicHJpdmF0ZS9QYXRocy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRwYXRoIGpvaW4gcGFyc2VcblxuUGF0aHMuIGNsYXNzXG5cdHwgSG9sZHMgcGF0aCBpbmZvcm1hdGlvbiBmb3IgdHJhbnNmb3JtaW5nIG9mIGEgc2luZ2xlIGZpbGUuXG5cdHwgLnJlbC1pbi1wYXRoOiBJbnB1dCBmaWxlIHJlbGF0aXZlIHRvIGluLWRpci5cblx0fCAuZnVsbC1pbi1wYXRoOiBBYnNvbHV0ZSBwYXRoIHRvIGlucHV0IGZpbGUuXG5cdHwgLmluLWV4dGVuc2lvbjogRXh0ZW5zaW9uIG9mIGlucHV0IGZpbGUuXG5cdHwgLnJlbC1vdXQtcGF0aDogT3V0cHV0IGZpbGUgcmVsYXRpdmUgdG8gb3V0LWRpci5cblx0fCAuZnVsbC1vdXQtcGF0aDogQWJzb2x1dGUgcGF0aCB0byBvdXRwdXQgZmlsZS5cblxuXHRjb25zdHJ1Y3QgdHJhbnNmb3JtZXJzIGluLWRpciBvdXQtZGlyIC5yZWwtaW4tcGF0aFxuXHRcdC5mdWxsLWluLXBhdGggPSBqb2luIGluLWRpciByZWwtaW4tcGF0aFxuXG5cdFx0dG9kbyBbZGlyLiBuYW1lLl0gPSBwYXJzZSByZWwtaW4tcGF0aFxuXHRcdHAgPSBwYXJzZSByZWwtaW4tcGF0aFxuXHRcdC5pbi1leHRlbnNpb24gPSBwLmV4dFxuXG5cdFx0b3V0LW5hbWUgPSA/LWNvbmQgKHRyYW5zZm9ybWVycy4/b3V0LWV4dGVuc2lvbiAuaW4tZXh0ZW5zaW9uKSBwLm5hbWUgfGV4dFxuXHRcdFx0XCIjKHAubmFtZSkuI2V4dFwiXG5cdFx0LnJlbC1vdXQtcGF0aCA9IG1hbmdsZS1wYXRoIChqb2luIHAuZGlyIG91dC1uYW1lKVxuXHRcdC5mdWxsLW91dC1wYXRoID0gam9pbiBvdXQtZGlyIC5yZWwtb3V0LXBhdGhcblxubWFuZ2xlLXBhdGggPSB8cGF0aFxuXHR8IE1hbmdsZSBwYXRoIHNvIGl0IGNhbiBiZSB1c2VkIGFzIGEgVVJMLlxuXHRyZXBsYWNlbWVudHMgPVxuXHRcdCchIC0+ICdiYW5nXG5cdFx0J0AgLT4gJ2F0XG5cdFx0XCJcXFxcP1wiIC0+ICdxXG5cdFx0XCJcXFxcJFwiIC0+ICdjYXNoXG5cdGZvciByZXBsYWNlbWVudHNcblx0XHR0b2RvIFNZTlRBWCBBcnJheSBkZXN0cnVjdHVyZVxuXHRcdHBhdGggOj0gcGF0aC5yZXBsYWNlIChuZXcgUmVnRXhwIF9bMF0gJ2cpIF9bMV1cblx0cGF0aFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
