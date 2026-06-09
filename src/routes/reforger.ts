import type { FastifyInstance } from "fastify";

import { ReforgerPayloadSchema } from "../schemas/reforger.js";
import { saveReforgerEvents } from "../services/saveReforgerEvents.js";
import { isAllowedReforgerIp, isAllowedReforgerServerId } from "../config/whitelist.js";

function parseCsvEnv(value?: string) {
    return new Set(
        (value ?? "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
    );
}

function isAllowedServerId(serverId: string) {
    const allowedServerIds = parseCsvEnv(process.env.ALLOWED_REFORGER_SERVER_IDS);
    if (allowedServerIds.size === 0) return true;

    return allowedServerIds.has(serverId);
}

function isAllowedIp(ip: string) {
    const allowedIps = parseCsvEnv(process.env.ALLOWED_REFORGER_IPS);
    if (allowedIps.size === 0) return true;

    return allowedIps.has(ip);
}

export default async function reforgerRoutes(app: FastifyInstance) {
    app.post("/reforger/events", async (request, reply) => {
        const result = ReforgerPayloadSchema.safeParse(request.body);

        if (!result.success) {
            return reply.status(400).send({
                error: "Invalid payload",
            });
        }

        const payload = result.data;

        if (payload.apiKey !== process.env.REFORGER_API_KEY) {
            return reply.status(401).send({
                error: "Unauthorized",
            });
        }

        if (!isAllowedReforgerServerId(payload.serverId)) {
            return reply.status(403).send({ error: "Forbidden serverId" });
        }

        if (!isAllowedReforgerIp(request.ip)) {
            return reply.status(403).send({ error: "Forbidden IP" });
        }

        const inserted = await saveReforgerEvents(payload);

        return reply.send({
            ok: true,
            received: payload.events.length,
            inserted,
        });
    });
}