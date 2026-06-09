import Fastify from "fastify";
import rateLimit from "@fastify/rate-limit";
import reforgerRoutes from "./routes/reforger.js";
import internalRoutes from "./routes/internal.js";
export function buildApp() {
    const app = Fastify({
        logger: process.env.NODE_ENV === "production",
        trustProxy: true,
    });
    app.register(rateLimit, {
        max: 60,
        timeWindow: "1 minute",
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