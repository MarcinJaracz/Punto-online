import express from "express";
import { createServer as createViteServer } from "vite";

async function startServer() {
    const app = express();

    // Tworzenie serwera Vite
    const vite = await createViteServer({
        server: { middlewareMode: "html" },
    });
    app.use(vite.middlewares);

    // Dodanie nagłówków CSP
    app.use((req, res, next) => {
		res.setHeader(
			"Content-Security-Policy",
			"default-src 'self'; script-src 'self' 'sha256-WOdSzz11/3cpqOdrm89LBL2UPwEU9EhbDtMy2OciEhs='; style-src 'self';"
		);
		next();
	});
	app.use((req, res, next) => {
        res.locals.nonce = "t+IuD00QVvfBTVlP1PYRiA==";
        next();
    });

    // Obsługa żądań na serwerze
    app.get("/", (req, res) => {
        res.send("Hello World");
    });

    // Uruchomienie serwera
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

startServer();
