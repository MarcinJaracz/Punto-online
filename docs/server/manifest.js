const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.jpg","font-awesome/css/all.css","font-awesome/css/all.min.css","font-awesome/css/brands.css","font-awesome/css/brands.min.css","font-awesome/css/duotone.css","font-awesome/css/duotone.min.css","font-awesome/css/fontawesome.css","font-awesome/css/fontawesome.min.css","font-awesome/css/light.css","font-awesome/css/light.min.css","font-awesome/css/regular.css","font-awesome/css/regular.min.css","font-awesome/css/solid.css","font-awesome/css/solid.min.css","font-awesome/css/svg-with-js.css","font-awesome/css/svg-with-js.min.css","font-awesome/css/thin.css","font-awesome/css/thin.min.css","font-awesome/css/v4-shims.css","font-awesome/css/v4-shims.min.css","font-awesome/webfonts/fa-brands-400.ttf","font-awesome/webfonts/fa-brands-400.woff","font-awesome/webfonts/fa-brands-400.woff2","font-awesome/webfonts/fa-duotone-900.ttf","font-awesome/webfonts/fa-duotone-900.woff","font-awesome/webfonts/fa-duotone-900.woff2","font-awesome/webfonts/fa-light-300.ttf","font-awesome/webfonts/fa-light-300.woff","font-awesome/webfonts/fa-light-300.woff2","font-awesome/webfonts/fa-regular-400.ttf","font-awesome/webfonts/fa-regular-400.woff","font-awesome/webfonts/fa-regular-400.woff2","font-awesome/webfonts/fa-solid-900.ttf","font-awesome/webfonts/fa-solid-900.woff","font-awesome/webfonts/fa-solid-900.woff2","font-awesome/webfonts/fa-thin-100.ttf","font-awesome/webfonts/fa-thin-100.woff","font-awesome/webfonts/fa-thin-100.woff2","font-awesome/webfonts/fa-v4compatibility.ttf","font-awesome/webfonts/fa-v4compatibility.woff2","profilepicture.jpg","favicon.ico","Punto-Icon.png","user_manual.pdf"]),
	mimeTypes: {".jpg":"image/jpeg",".css":"text/css",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.DFQpZqrv.js","app":"_app/immutable/entry/app.BVYeIW5m.js","imports":["_app/immutable/entry/start.DFQpZqrv.js","_app/immutable/chunks/entry.DkswO31u.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BjqbIcNX.js","_app/immutable/entry/app.BVYeIW5m.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DUe5cY50.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-q0peU_fJ.js')),
			__memo(() => import('./chunks/1-xZXX4C3h.js')),
			__memo(() => import('./chunks/2-BgQ8r9NX.js')),
			__memo(() => import('./chunks/3-BlDhBSAv.js')),
			__memo(() => import('./chunks/4-CxSvwiXn.js')),
			__memo(() => import('./chunks/5-BMp8PyZO.js')),
			__memo(() => import('./chunks/6-D9mXlUHI.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/board",
				pattern: /^\/board\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/continue",
				pattern: /^\/continue\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/newgame",
				pattern: /^\/newgame\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
