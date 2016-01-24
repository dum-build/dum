"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","msl/lib/private/boot","chalk","machine-that-goes-bing","pad"],(exports,_boot,chalk_0,machine_45that_45goes_45bing_1,pad_2)=>{
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
			this.options=options
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L2R1bS9kdW0vc3JjL3ByaXZhdGUvTG9nZ2VyLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0NBS0EsVUFBUSxJQUFLO0NBQ2IsbUJBQWdCLE1BQUssSUFBSyxVQUFPLEtBQU0sSUFBSyxhQUFVLElBQUs7Q0FDM0Qsb0JBQWUsS0FBTSxLQUFNLElBQUssRUFBQztDQUNqQyxrQkFBYSxPQUFRLElBQUssRUFBQztDQUMzQixnQkFBWTtDQUNaLGdCQUFZO2lCQUdQO0VBRU0sWUFBQSxRQUNROzs7O2VBRUwsU0FBTyxVQUNPOztHQUExQixZQUFhLEdBQUUsYUFBWSxZQUFTLG1CQUFXLFNBQU87O2VBRTFDLFNBQU8sZ0JBQ1c7O0dBQTlCLFlBQWEsR0FBRSxhQUFZLFlBQVMsbUJBQVcsU0FBTzs7ZUFFMUMsU0FBTyxVQUNPOztHQUExQixZQUFhLEdBQUUsYUFBWSxZQUFTLG1CQUFXLFNBQU87O2VBRTFDLFVBQVEsS0FDSTs7R0FBeEIsUUFBTSxZQUFXLGFBQVc7R0FDNUIsWUFBYSxHQUFFLGFBQVksWUFBUyxZQUFVLGNBQVcsSUFBSyxTQUFLOztvQkFFbEQsTUFBTSxXQUNVOztHQUFqQyxZQUFVLElBQUssSUFBRTtHQUNqQixZQUFhLEdBQUUsYUFBWSxhQUFVLG9CQUFZLFVBQVE7O2VBRTdDLE1BQ0s7O0dBQWpCLFlBQWEsR0FBRSxhQUFZLFlBQVMsb0JBQVk7O2dCQUVuQyxNQUNLOztHQUFsQixZQUFhLEdBQUUsYUFBWSxhQUFVLG9CQUFZOztnQkFFbEM7OytCQUNBO0lBQVosR0FBQSxvQkFDYztZQUFkO0lBQUE7SUFDSCxjQUFjO0lBQ2QsY0FBZTs7O2NBRUYsU0FBTyxVQUNPOztVQUExQixHQUFFLFdBQVMsYUFBUyxTQUFRLFlBQVU7O2VBRXpCLE1BQ0s7O1VBQW5CLG1CQUFXLHFCQUFrQiIsImZpbGUiOiJwcml2YXRlL0xvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydFxuXHRjaGFsayBib2xkIGJsdWUgY3lhbiBkaW0gZ3JlZW4gcmVkIHllbGxvd1xuXHRtYWNoaW5lLXRoYXQtZ29lcy1iaW5nXG5cdHBhZFxuXG5hcnJvdyA9IGRpbSAn4p6UXG5lcnJvci1oZWFkZXIgPSBcIlxcbiAjKGRpbSAn4pWQ4pWQ4pWQKSAjKGJvbGQgKHJlZCAnRVJST1IpKSAjKGRpbSAn4pWQ4pWQ4pWQKVxcblwiXG5zdHlsZS1tYWluID0gJihib2xkIChibHVlIChwYWQgXyA2KSkpXG5zdHlsZS1pbiA9ICYoeWVsbG93IChwYWQgXyAzMCkpXG5zdHlsZS1vdXQgPSBjeWFuXG5zdHlsZS11cmwgPSBncmVlblxuXG5jbGFzc1xuXHR8IFdyaXRlcyBvdXRwdXQgdG8gdGhlIGNvbnNvbGUgYW5kIGJlZXBzIG9uIGVycm9yLlxuXG5cdGNvbnN0cnVjdCAub3B0aW9uc1xuXHRcdHBhc3NcblxuXHRsb2ctYnVpbGQhICFcXGluLWRpciBvdXQtZGlyXG5cdFx0Y29uc29sZS5sb2cgXCIjKHN0eWxlLW1haW4gJ2J1aWxkKSAjKC5zaG93LWRpcnMgaW4tZGlyIG91dC1kaXIpXCJcblxuXHRsb2ctYm93ZXIhICFcXGluLWRpciByZWwtb3V0LWRpclxuXHRcdGNvbnNvbGUubG9nIFwiIyhzdHlsZS1tYWluICdib3dlcikgIyguc2hvdy1kaXJzIGluLWRpciByZWwtb3V0LWRpcilcIlxuXG5cdGxvZy13YXRjaCEgIVxcaW4tZGlyIG91dC1kaXJcblx0XHRjb25zb2xlLmxvZyBcIiMoc3R5bGUtbWFpbiAnd2F0Y2gpICMoLnNob3ctZGlycyBpbi1kaXIgb3V0LWRpcilcIlxuXG5cdGxvZy1zZXJ2ZSEgIVxcb3V0LWRpciBwb3J0XG5cdFx0dXJsID0gc3R5bGUtdXJsIFwibG9jYWxob3N0OiNwb3J0XCJcblx0XHRjb25zb2xlLmxvZyBcIiMoc3R5bGUtbWFpbiAnc2VydmUpICMoc3R5bGUtb3V0IG91dC1kaXIpICMoZGltICd0bykgI3VybFwiXG5cblx0bG9nLWRlcGVuZGVuY3khICFcXHBhdGhzIGRlcGVuZGVuY3lcblx0XHRjaGFuZ2VkID0gZGltIFwiKCNkZXBlbmRlbmN5IGNoYW5nZWQpXCJcblx0XHRjb25zb2xlLmxvZyBcIiMoc3R5bGUtbWFpbiAnZGVwZW5kKSAjKC5zaG93LXBhdGhzIHBhdGhzKSAjY2hhbmdlZFwiXG5cblx0bG9nLXdyaXRlISAhXFxwYXRoc1xuXHRcdGNvbnNvbGUubG9nIFwiIyhzdHlsZS1tYWluICd3cml0ZSkgIyguc2hvdy1wYXRocyBwYXRocylcIlxuXG5cdGxvZy1kZWxldGUhICFcXHBhdGhzXG5cdFx0Y29uc29sZS5sb2cgXCIjKHN0eWxlLW1haW4gJ2RlbGV0ZSkgIyguc2hvdy1wYXRocyBwYXRocylcIlxuXG5cdCRsb2ctZXJyb3IhICQhXFxfXG5cdFx0aWYgLm9wdGlvbnMuc291bmRcblx0XHRcdCQgbWFjaGluZS10aGF0LWdvZXMtYmluZygpXG5cdFx0Y29uc29sZS5lcnJvciBlcnJvci1oZWFkZXJcblx0XHRjb25zb2xlLmVycm9yIF8uc3RhY2tcblxuXHRteSBzaG93LWRpcnMgXFxpbi1kaXIgb3V0LWRpclxuXHRcdFwiIyhzdHlsZS1pbiBpbi1kaXIpICNhcnJvdyAjKHN0eWxlLW91dCBvdXQtZGlyKVwiXG5cblx0bXkgc2hvdy1wYXRocyBcXHBhdGhzXG5cdFx0LnNob3ctZGlycyBwYXRocy5yZWwtaW4tcGF0aCBwYXRocy5yZWwtb3V0LXBhdGhcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
