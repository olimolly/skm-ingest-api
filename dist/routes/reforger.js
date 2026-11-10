import { ReforgerPayloadSchema } from "../schemas/reforger.js";
import { saveReforgerEvents } from "../services/saveReforgerEvents.js";
import { isAllowedReforgerIp, isAllowedReforgerServerId } from "../config/whitelist.js";
import { getClientIp } from "../config/clientIp.js";
export default async function reforgerRoutes(app) {
    app.post("/reforger/events", async (request, reply) => {
        const clientIp = getClientIp(request);
        const result = ReforgerPayloadSchema.safeParse(request.body);
        if (!result.success) {
            request.log.warn({
                ip: clientIp,
                issues: result.error.issues,
            }, "Rejected Reforger payload: invalid schema");
            return reply.status(400).send({ error: "Invalid payload" });
        }
        const payload = result.data;
        if (payload.apiKey !== process.env.REFORGER_INGEST_API_KEY) {
            request.log.warn({
                serverId: payload.serverId,
                sessionId: payload.sessionId,
                ip: clientIp,
            }, "Rejected Reforger payload: invalid apiKey");
            return reply.status(401).send({ error: "Unauthorized" });
        }
        if (!isAllowedReforgerServerId(payload.serverId)) {
            request.log.warn({
                serverId: payload.serverId,
                sessionId: payload.sessionId,
                ip: clientIp,
            }, "Rejected Reforger payload: forbidden serverId");
            return reply.status(403).send({ error: "Forbidden serverId" });
        }
        if (!isAllowedReforgerIp(clientIp)) {
            request.log.warn({
                serverId: payload.serverId,
                sessionId: payload.sessionId,
                ip: clientIp,
            }, "Rejected Reforger payload: forbidden IP");
            return reply.status(403).send({ error: "Forbidden IP" });
        }
        const inserted = await saveReforgerEvents(payload);
        request.log.info({
            serverId: payload.serverId,
            sessionId: payload.sessionId,
            missionId: payload.missionId,
            received: payload.events.length,
            inserted,
            ip: clientIp,
        }, "Accepted Reforger payload");
        return reply.send({
            ok: true,
            received: payload.events.length,
            inserted,
        });
    });
}
//# sourceMappingURL=reforger.js.map