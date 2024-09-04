import { defineConfig } from "vitest/config"
import { sveltekit } from "@sveltejs/kit/vite"
import replace from '@rollup/plugin-replace'


export default defineConfig({
	plugins: [
		sveltekit(),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			preventAssignment: true,
			sourcemap: true

		})
	],
	server: {
		open: process.env.NODE_ENV === 'development',
	},
	resolve: {
		alias: {
			$components: "/src/lib/components",
			$lib: "/src/lib",
		},
	},
})
