import Fastify from "fastify";
import reforgerRoutes from "./routes/reforger.js";
import internalRoutes from "./routes/internal.js";
export function buildApp() {
    const app = Fastify({
        logger: false,
    });
    app.addContentTypeParser("*", { parseAs: "string" }, async (_request, body) => {
        return JSON.parse(body);
    });
    app.register(reforgerRoutes);
    app.register(internalRoutes);
    app.get("/health", async () => {
        return { ok: true };
    });
    return app;
}
//# sourceMappingURL=app.js.map