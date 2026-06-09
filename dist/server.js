import { buildApp } from "./app.js";
const app = buildApp();
const port = Number(process.env.PORT) || 3001;
async function start() {
    try {
        await app.listen({
            port,
            host: "0.0.0.0",
        });
        console.log(`[SKM] API listening on 0.0.0.0:${port}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
start();
//# sourceMappingURL=server.js.map