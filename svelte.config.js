import adapter from "@sveltejs/adapter-auto";
import { sveltePreprocess } from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: "./src/lib",
			$components: "./src/lib/components",
		},
	},
	preprocess: sveltePreprocess(), 

	onwarn: (warning, handler) => {
		if (warning.code.startsWith("a11y-")) return;
		if (warning.code.startsWith("Cannot find module '$")) return;
		if (warning.code.startsWith("js(2307)")) return;
		handler(warning);
	},
};

export default config;
