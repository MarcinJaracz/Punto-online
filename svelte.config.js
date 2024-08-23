import node from "@sveltejs/adapter-node"

export default {
	kit: {
		adapter: node({
			fallback: null,
			static: false,
		}),
	},
}
