import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
	build: {
		outDir: "dist-electron",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "src/main.js"),
				preload: resolve(__dirname, "src/preload.js"),
			},
			external: ["electron"],
		},
		target: "node14",
	},
	resolve: {
		alias: {
			$components: resolve(__dirname, "src/lib/components"),
		},
	},
})
