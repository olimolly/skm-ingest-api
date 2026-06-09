import { prisma } from "../lib/prisma.js";
export async function getReforgerSessions() {
    return prisma.reforgerSession.findMany({
        orderBy: {
            startedAt: "desc",
        },
        include: {
            _count: {
                select: {
                    events: true,
                },
            },
        },
    });
}
//# sourceMappingURL=getReforgerSessions.js.map