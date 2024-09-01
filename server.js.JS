import express from "express"
import { createServer as createViteServer } from "vite"

async function startServer() {
	const app = express()

	// Tworzenie serwera Vite
	const vite = await createViteServer({
		server: { middlewareMode: "html" },
	})
	app.use(vite.middlewares)

	// Dodanie nagłówków CSP
	app.use((req, res, next) => {
		res.setHeader(
			"Content-Security-Policy",
			"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; frame-src 'self'; object-src 'none';",
		)
		next()
	})

	// Start serwera
	app.listen(3000, () => {
		console.log("Server is running at http://localhost:3000")
	})
}

startServer()
