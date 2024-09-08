import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [vitePreprocess()],
	build: {
		outDir: "docs",
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: "index.html",
			precompress: false,
			strict: true
		}),
		alias: {
			$lib: "./src/lib",
			$components: "./src/lib/components",
			$sounds: "./src/lib/sounds",
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	onwarn: (warning, handler) => {
		if (warning.code.startsWith("a11y-")) return
		if (warning.code.startsWith("css-unused-selector")) return

		handler(warning)
	},
}

export default config
