import { prisma } from "../lib/prisma.js";
const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY;
const MAX_SEARCH_QUERY_LENGTH = 80;
if (!INTERNAL_API_KEY) {
    throw new Error("Missing INTERNAL_API_KEY");
}
function isAuthorized(authHeader) {
    return authHeader === `Bearer ${INTERNAL_API_KEY}`;
}
function parsePositiveInt(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}
export default async function internalRoutes(app) {
    app.get("/internal/sessions", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }
        const rawQ = request.query.q;
        if (rawQ !== undefined && rawQ.length > MAX_SEARCH_QUERY_LENGTH) {
            return reply.status(400).send({
                error: "Invalid query",
                message: `q must not exceed ${MAX_SEARCH_QUERY_LENGTH} characters`,
            });
        }
        const page = parsePositiveInt(request.query.page, 1);
        const pageSize = Math.min(parsePositiveInt(request.query.pageSize, 12), 50);
        const q = rawQ?.trim();
        const where = q
            ? {
                OR: [
                    { serverId: { contains: q, mode: "insensitive" } },
                    { sessionId: { contains: q, mode: "insensitive" } },
                    { missionId: { contains: q, mode: "insensitive" } },
                    { missionName: { contains: q, mode: "insensitive" } },
                ],
            }
            : {};
        const skip = (page - 1) * pageSize;
        const [sessions, total] = await Promise.all([
            prisma.reforgerSession.findMany({
                where,
                orderBy: {
                    createdAt: "desc",
                },
                skip,
                take: pageSize,
                include: {
                    _count: {
                        select: {
                            events: true,
                        },
                    },
                },
            }),
            prisma.reforgerSession.count({ where }),
        ]);
        return {
            ok: true,
            sessions,
            pagination: {
                page,
                pageSize,
                total,
                totalPages: Math.ceil(total / pageSize),
            },
        };
    });
    app.get("/internal/servers/:serverId/sessions/:sessionId", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }
        const session = await prisma.reforgerSession.findUnique({
            where: {
                serverId_sessionId: {
                    serverId: request.params.serverId,
                    sessionId: request.params.sessionId,
                },
            },
            include: {
                objectives: {
                    orderBy: {
                        taskId: "asc",
                    },
                },
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
        };
    });
    // Backward-compatible lookup. A server-scoped URL is required as soon as
    // two servers use the same sessionId.
    app.get("/internal/sessions/:sessionId", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }
        const sessions = await prisma.reforgerSession.findMany({
            where: {
                sessionId: request.params.sessionId,
            },
            take: 2,
            include: {
                objectives: {
                    orderBy: {
                        taskId: "asc",
                    },
                },
                events: {
                    orderBy: {
                        eventTimestamp: "asc",
                    },
                },
            },
        });
        if (sessions.length === 0) {
            return reply.status(404).send({ error: "Session not found" });
        }
        if (sessions.length > 1) {
            return reply.status(409).send({
                error: "Ambiguous sessionId",
                message: "Use /internal/servers/:serverId/sessions/:sessionId",
            });
        }
        return {
            ok: true,
            session: sessions[0],
        };
    });
}
//# sourceMappingURL=internal.js.map