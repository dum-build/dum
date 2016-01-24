"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","path","msl/lib/at/q"],(exports,_boot,path_0,_63_1)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(path_0),join=_ms.get(_$0,"join"),parse=_ms.get(_$0,"parse"),_$1=_ms.getModule(_63_1),_63_45cond=_ms.get(_$1,"?-cond");
	let Paths=exports.default=class Paths{
		constructor(transformers,in_45dir,out_45dir,rel_45in_45path){
			let _this=this;
			this["rel-in-path"]=rel_45in_45path;
			_this["full-in-path"]=join(in_45dir,rel_45in_45path);
			let p=parse(rel_45in_45path);
			_this["in-extension"]=p.ext;
			let out_45name=_63_45cond(transformers["?out-extension"](_this["in-extension"]),p.name,ext=>{
				return `${p.name}.${ext}`
			});
			_this["rel-out-path"]=mangle_45path(join(p.dir,out_45name));
			_this["full-out-path"]=join(out_45dir,_this["rel-out-path"])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvUGF0aHMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FHQSwwQkFDWTtFQU9ELFlBQUEsYUFBYSxTQUFPLFVBQVEsZ0JBQ1k7OztHQUFqRCxzQkFBaUIsS0FBSyxTQUFPO0dBRzdCLE1BQUksTUFBTTtHQUNWLHNCQUFpQjtHQUVqQixlQUFXLFdBQVEsK0JBQTRCLHVCQUFlLE9BQVEsS0FDRztXQUF2RSxHQUFFLFVBQVM7O0dBQ2Isc0JBQWlCLGNBQWEsS0FBSyxNQUFNO0dBQ3pDLHVCQUFrQixLQUFLLFVBQVE7OztDQUVqQyxrQkFBZSx1QkFBQSxLQUNJO0VBQ2xCLGlCQUNjLEtBQUE7O29CQUFaLElBQU07b0JBQ04sSUFBTTtvQkFDTixNQUFTO29CQUNULE1BQVM7OztFQUNQLFFBQUEsS0FBQSxhQUNZO1FBQ1AsYUFBYyxLQUFJLGdCQUFRLEVBQUMsR0FBSSxhQUFJLEVBQUM7RUFBQTtTQUM3QztDQUFBIiwiZmlsZSI6InByaXZhdGUvUGF0aHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnRcblx0cGF0aCBqb2luIHBhcnNlXG5cblBhdGhzLiBjbGFzc1xuXHR8IEhvbGRzIHBhdGggaW5mb3JtYXRpb24gZm9yIHRyYW5zZm9ybWluZyBvZiBhIHNpbmdsZSBmaWxlLlxuXHR8IC5yZWwtaW4tcGF0aDogSW5wdXQgZmlsZSByZWxhdGl2ZSB0byBpbi1kaXIuXG5cdHwgLmZ1bGwtaW4tcGF0aDogQWJzb2x1dGUgcGF0aCB0byBpbnB1dCBmaWxlLlxuXHR8IC5pbi1leHRlbnNpb246IEV4dGVuc2lvbiBvZiBpbnB1dCBmaWxlLlxuXHR8IC5yZWwtb3V0LXBhdGg6IE91dHB1dCBmaWxlIHJlbGF0aXZlIHRvIG91dC1kaXIuXG5cdHwgLmZ1bGwtb3V0LXBhdGg6IEFic29sdXRlIHBhdGggdG8gb3V0cHV0IGZpbGUuXG5cblx0Y29uc3RydWN0IHRyYW5zZm9ybWVycyBpbi1kaXIgb3V0LWRpciAucmVsLWluLXBhdGhcblx0XHQuZnVsbC1pbi1wYXRoIDo9IGpvaW4gaW4tZGlyIHJlbC1pbi1wYXRoXG5cblx0XHR0b2RvIFtkaXIuIG5hbWUuXSA9IHBhcnNlIHJlbC1pbi1wYXRoXG5cdFx0cCA9IHBhcnNlIHJlbC1pbi1wYXRoXG5cdFx0LmluLWV4dGVuc2lvbiA6PSBwLmV4dFxuXG5cdFx0b3V0LW5hbWUgPSA/LWNvbmQgKHRyYW5zZm9ybWVycy4/b3V0LWV4dGVuc2lvbiAuaW4tZXh0ZW5zaW9uKSBwLm5hbWUgXFxleHRcblx0XHRcdFwiIyhwLm5hbWUpLiNleHRcIlxuXHRcdC5yZWwtb3V0LXBhdGggOj0gbWFuZ2xlLXBhdGggKGpvaW4gcC5kaXIgb3V0LW5hbWUpXG5cdFx0LmZ1bGwtb3V0LXBhdGggOj0gam9pbiBvdXQtZGlyIC5yZWwtb3V0LXBhdGhcblxubWFuZ2xlLXBhdGggPSBcXHBhdGhcblx0fCBNYW5nbGUgcGF0aCBzbyBpdCBjYW4gYmUgdXNlZCBhcyBhIFVSTC5cblx0cmVwbGFjZW1lbnRzID1cblx0XHQnISAtPiAnYmFuZ1xuXHRcdCdAIC0+ICdhdFxuXHRcdFwiXFxcXD9cIiAtPiAncVxuXHRcdFwiXFxcXCRcIiAtPiAnY2FzaFxuXHRmb3IgcmVwbGFjZW1lbnRzXG5cdFx0dG9kbyBTWU5UQVggQXJyYXkgZGVzdHJ1Y3R1cmVcblx0XHRwYXRoIDo9IHBhdGgucmVwbGFjZSAobmV3IFJlZ0V4cCBfWzBdICdnKSBfWzFdXG5cdHBhdGhcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
