"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/dist/private/boot","chalk","machine-that-goes-bing","pad"],(exports,_boot,chalk_0,machine_45that_45goes_45bing_1,pad_2)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(chalk_0),bold=_ms.get(_$0,"bold"),blue=_ms.get(_$0,"blue"),cyan=_ms.get(_$0,"cyan"),dim=_ms.get(_$0,"dim"),green=_ms.get(_$0,"green"),red=_ms.get(_$0,"red"),yellow=_ms.get(_$0,"yellow"),machine_45that_45goes_45bing=_ms.getDefaultExport(machine_45that_45goes_45bing_1),pad=_ms.getDefaultExport(pad_2);
	let arrow=dim("➔");
	let error_45header=`\n ${dim("═══")} ${bold(red("ERROR"))} ${dim("═══")}\n`;
	let style_45main=_=>bold(blue(pad(_,6)));
	let style_45in=_=>yellow(pad(_,30));
	let style_45out=cyan;
	let style_45url=green;
	exports.default=class {
		constructor(options){
			let _this=this;
			_ms.newProperty(this,"options",options)
		}
		"log-build!"(in_45dir,out_45dir){
			let _this=this;
			console.log(`${style_45main("build")} ${_this["show-dirs"](in_45dir,out_45dir)}`)
		}
		"log-bower!"(in_45dir,rel_45out_45dir){
			let _this=this;
			console.log(`${style_45main("bower")} ${_this["show-dirs"](in_45dir,rel_45out_45dir)}`)
		}
		"log-watch!"(in_45dir,out_45dir){
			let _this=this;
			console.log(`${style_45main("watch")} ${_this["show-dirs"](in_45dir,out_45dir)}`)
		}
		"log-serve!"(out_45dir,port){
			let _this=this;
			let url=style_45url(`localhost:${port}`);
			console.log(`${style_45main("serve")} ${style_45out(out_45dir)} ${dim("to")} ${url}`)
		}
		"log-dependency!"(paths,dependency){
			let _this=this;
			let changed=dim(`(${dependency} changed)`);
			console.log(`${style_45main("depend")} ${_this["show-paths"](paths)} ${changed}`)
		}
		"log-write!"(paths){
			let _this=this;
			console.log(`${style_45main("write")} ${_this["show-paths"](paths)}`)
		}
		"log-delete!"(paths){
			let _this=this;
			console.log(`${style_45main("delete")} ${_this["show-paths"](paths)}`)
		}
		"$log-error!"(_){
			let _this=this;
			return _ms.async(function*(){
				if(_this.options.sound){
					(yield machine_45that_45goes_45bing())
				};
				console.error(error_45header);
				console.error(_.stack)
			})
		}
		"show-dirs"(in_45dir,out_45dir){
			let _this=this;
			return `${style_45in(in_45dir)} ${arrow} ${style_45out(out_45dir)}`
		}
		"show-paths"(paths){
			let _this=this;
			return _this["show-dirs"](paths["rel-in-path"],paths["rel-out-path"])
		}
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvTG9nZ2VyLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0NBS0EsVUFBUSxJQUFLO0NBQ2IsbUJBQWdCLE1BQUssSUFBSyxVQUFPLEtBQU0sSUFBSyxhQUFVLElBQUs7Q0FDM0Qsb0JBQWUsS0FBTSxLQUFNLElBQUssRUFBQztDQUNqQyxrQkFBYSxPQUFRLElBQUssRUFBQztDQUMzQixnQkFBWTtDQUNaLGdCQUFZO2lCQUdQO0VBRU0sWUFBQTtPQW9DVDs7O2VBakNhLFNBQU87T0FpQ3BCO0dBaENBLFlBQWEsR0FBRSxhQUFZLFlBZ0MzQixtQkFoQytDLFNBQU87O2VBRXpDLFNBQU87T0E4QnBCO0dBN0JBLFlBQWEsR0FBRSxhQUFZLFlBNkIzQixtQkE3QitDLFNBQU87O2VBRXpDLFNBQU87T0EyQnBCO0dBMUJBLFlBQWEsR0FBRSxhQUFZLFlBMEIzQixtQkExQitDLFNBQU87O2VBRXpDLFVBQVE7T0F3QnJCO0dBdkJBLFFBQU0sWUFBVyxhQUFXO0dBQzVCLFlBQWEsR0FBRSxhQUFZLFlBQVMsWUFBVSxjQUFXLElBQUssU0FBSzs7b0JBRWpELE1BQU07T0FvQnhCO0dBbkJBLFlBQVUsSUFBSyxJQUFFO0dBQ2pCLFlBQWEsR0FBRSxhQUFZLGFBa0IzQixvQkFsQmlELFVBQVE7O2VBRTVDO09BZ0JiO0dBZkEsWUFBYSxHQUFFLGFBQVksWUFlM0Isb0JBZmdEOztnQkFFbEM7T0FhZDtHQVpBLFlBQWEsR0FBRSxhQUFZLGFBWTNCLG9CQVppRDs7Z0JBRWpDO09BVWhCOztJQVRHLEdBU0gsb0JBUmlCO1lBQWQ7SUFBQTtJQUNILGNBQWM7SUFDZCxjQUFlOzs7Y0FFRCxTQUFPO09BSXJCO1VBSEMsR0FBRSxXQUFTLGFBQVMsU0FBUSxZQUFVOztlQUV4QjtPQUNmO1VBQUEsbUJBQVcscUJBQWtCIiwiZmlsZSI6InByaXZhdGUvTG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0XG5cdGNoYWxrIGJvbGQgYmx1ZSBjeWFuIGRpbSBncmVlbiByZWQgeWVsbG93XG5cdG1hY2hpbmUtdGhhdC1nb2VzLWJpbmdcblx0cGFkXG5cbmFycm93ID0gZGltICfinpRcbmVycm9yLWhlYWRlciA9IFwiXFxuICMoZGltICfilZDilZDilZApICMoYm9sZCAocmVkICdFUlJPUikpICMoZGltICfilZDilZDilZApXFxuXCJcbnN0eWxlLW1haW4gPSAmKGJvbGQgKGJsdWUgKHBhZCBfIDYpKSlcbnN0eWxlLWluID0gJih5ZWxsb3cgKHBhZCBfIDMwKSlcbnN0eWxlLW91dCA9IGN5YW5cbnN0eWxlLXVybCA9IGdyZWVuXG5cbmNsYXNzXG5cdHwgV3JpdGVzIG91dHB1dCB0byB0aGUgY29uc29sZSBhbmQgYmVlcHMgb24gZXJyb3IuXG5cblx0Y29uc3RydWN0IC5vcHRpb25zXG5cdFx0cGFzc1xuXG5cdCdsb2ctYnVpbGQhICF8aW4tZGlyIG91dC1kaXJcblx0XHRjb25zb2xlLmxvZyBcIiMoc3R5bGUtbWFpbiAnYnVpbGQpICMoLnNob3ctZGlycyBpbi1kaXIgb3V0LWRpcilcIlxuXG5cdCdsb2ctYm93ZXIhICF8aW4tZGlyIHJlbC1vdXQtZGlyXG5cdFx0Y29uc29sZS5sb2cgXCIjKHN0eWxlLW1haW4gJ2Jvd2VyKSAjKC5zaG93LWRpcnMgaW4tZGlyIHJlbC1vdXQtZGlyKVwiXG5cblx0J2xvZy13YXRjaCEgIXxpbi1kaXIgb3V0LWRpclxuXHRcdGNvbnNvbGUubG9nIFwiIyhzdHlsZS1tYWluICd3YXRjaCkgIyguc2hvdy1kaXJzIGluLWRpciBvdXQtZGlyKVwiXG5cblx0J2xvZy1zZXJ2ZSEgIXxvdXQtZGlyIHBvcnRcblx0XHR1cmwgPSBzdHlsZS11cmwgXCJsb2NhbGhvc3Q6I3BvcnRcIlxuXHRcdGNvbnNvbGUubG9nIFwiIyhzdHlsZS1tYWluICdzZXJ2ZSkgIyhzdHlsZS1vdXQgb3V0LWRpcikgIyhkaW0gJ3RvKSAjdXJsXCJcblxuXHQnbG9nLWRlcGVuZGVuY3khICF8cGF0aHMgZGVwZW5kZW5jeVxuXHRcdGNoYW5nZWQgPSBkaW0gXCIoI2RlcGVuZGVuY3kgY2hhbmdlZClcIlxuXHRcdGNvbnNvbGUubG9nIFwiIyhzdHlsZS1tYWluICdkZXBlbmQpICMoLnNob3ctcGF0aHMgcGF0aHMpICNjaGFuZ2VkXCJcblxuXHQnbG9nLXdyaXRlISAhfHBhdGhzXG5cdFx0Y29uc29sZS5sb2cgXCIjKHN0eWxlLW1haW4gJ3dyaXRlKSAjKC5zaG93LXBhdGhzIHBhdGhzKVwiXG5cblx0J2xvZy1kZWxldGUhICF8cGF0aHNcblx0XHRjb25zb2xlLmxvZyBcIiMoc3R5bGUtbWFpbiAnZGVsZXRlKSAjKC5zaG93LXBhdGhzIHBhdGhzKVwiXG5cblx0JyRsb2ctZXJyb3IhICQhfF9cblx0XHRpZiAub3B0aW9ucy5zb3VuZFxuXHRcdFx0JCBtYWNoaW5lLXRoYXQtZ29lcy1iaW5nKClcblx0XHRjb25zb2xlLmVycm9yIGVycm9yLWhlYWRlclxuXHRcdGNvbnNvbGUuZXJyb3IgXy5zdGFja1xuXG5cdG15ICdzaG93LWRpcnMgfGluLWRpciBvdXQtZGlyXG5cdFx0XCIjKHN0eWxlLWluIGluLWRpcikgI2Fycm93ICMoc3R5bGUtb3V0IG91dC1kaXIpXCJcblxuXHRteSAnc2hvdy1wYXRocyB8cGF0aHNcblx0XHQuc2hvdy1kaXJzIHBhdGhzLnJlbC1pbi1wYXRoIHBhdGhzLnJlbC1vdXQtcGF0aFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
