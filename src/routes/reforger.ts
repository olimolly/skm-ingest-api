import type { FastifyInstance } from "fastify";

import { ReforgerPayloadSchema } from "../schemas/reforger.js";
import { saveReforgerEvents } from "../services/saveReforgerEvents.js";

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

        const inserted = await saveReforgerEvents(payload);

        return reply.send({
            ok: true,
            received: payload.events.length,
            inserted,
        });
    });
}