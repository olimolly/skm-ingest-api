import Fastify from "fastify";
import rateLimit, { normalizeIP } from "@fastify/rate-limit";
import reforgerRoutes from "./routes/reforger.js";
import internalRoutes from "./routes/internal.js";
import { getClientIp } from "./config/clientIp.js";

export function buildApp() {
    const app = Fastify({
        logger: process.env.NODE_ENV === "production",
        // Client IPs are resolved explicitly from Render's trusted edge header.
        // Do not trust arbitrary X-Forwarded-* values.
        trustProxy: false,
    });

    app.register(rateLimit, {
        global: true,
        max: 60,
        timeWindow: "1 minute",
        ipv6Subnet: 64,
        keyGenerator: (request) => normalizeIP(getClientIp(request), 64),
    });

    app.addContentTypeParser("*", { parseAs: "string" }, async (_request: unknown, body: string) => {
        return JSON.parse(body);
    });

    app.register(reforgerRoutes);
    app.register(internalRoutes);

    app.register(async function healthRoutes(scope) {
        scope.get("/health", {
            config: {
                rateLimit: false,
            },
        }, async () => {
            return { ok: true };
        });
    });

    return app;
}
