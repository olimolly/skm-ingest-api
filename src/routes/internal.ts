import type { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma.js";

const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY;

if (!INTERNAL_API_KEY) {
    throw new Error("Missing INTERNAL_API_KEY");
}

function isAuthorized(authHeader: unknown) {
    return authHeader === `Bearer ${INTERNAL_API_KEY}`;
}

function parsePositiveInt(value: unknown, fallback: number) {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

export default async function internalRoutes(app: FastifyInstance) {
    app.get<{
        Querystring: {
            page?: string;
            pageSize?: string;
            q?: string;
        };
    }>("/internal/sessions", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }

        const page = parsePositiveInt(request.query.page, 1);
        const pageSize = Math.min(parsePositiveInt(request.query.pageSize, 12), 50);
        const q = request.query.q?.trim().slice(0, 80);

        const where = q
            ? {
                OR: [
                    { serverId: { contains: q, mode: "insensitive" as const } },
                    { sessionId: { contains: q, mode: "insensitive" as const } },
                    { missionId: { contains: q, mode: "insensitive" as const } },
                    { missionName: { contains: q, mode: "insensitive" as const } },
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

    app.get<{ Params: { sessionId: string } }>("/internal/sessions/:sessionId", async (request, reply) => {
        if (!isAuthorized(request.headers.authorization)) {
            return reply.status(401).send({ error: "Unauthorized" });
        }

        const session = await prisma.reforgerSession.findUnique({
            where: {
                sessionId: request.params.sessionId,
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
        };
    });
}