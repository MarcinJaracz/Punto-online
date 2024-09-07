import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [vitePreprocess()],
	build: {
		outDir: "docs",
	},
	kit: {
		adapter: adapter(),
		alias: {
			$lib: "./src/lib",
			$components: "./src/lib/components",
			$sounds: "./src/lib/sounds",
		},
	},
	onwarn: (warning, handler) => {
		if (warning.code.startsWith("a11y-")) return
		if (warning.code.startsWith("css-unused-selector")) return

		handler(warning)
	},
}

export default config
