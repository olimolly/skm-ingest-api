import { prisma } from "../lib/prisma.js";
function isAuthorized(authHeader) {
    return authHeader === `Bearer ${process.env.INTERNAL_API_KEY}`;
}
export default async function internalRoutes(app) {
    app.get("/internal/sessions", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }
        const sessions = await prisma.reforgerSession.findMany({
            orderBy: {
                createdAt: "desc",
            },
            take: 50,
            include: {
                _count: {
                    select: {
                        events: true,
                    },
                },
            },
        });
        return {
            ok: true,
            sessions,
        };
    });
    app.get("/internal/sessions/:sessionId/events", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }
        const params = request.params;
        const session = await prisma.reforgerSession.findUnique({
            where: {
                sessionId: params.sessionId,
            },
            include: {
                events: {
                    orderBy: {
                        eventTimestamp: "asc",
                    },
                },
            },
        });
        if (!session) {
            return reply.status(404).send({ error: "Session not found" });
        }
        return {
            ok: true,
            session,
            events: session.events,
        };
    });
}
//# sourceMappingURL=internal.js.map