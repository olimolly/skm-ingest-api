import { prisma } from "../lib/prisma.js";
export async function saveReforgerEvents(payload) {
    const sessionStartedEvent = payload.events.find((event) => event.type === "SESSION_STARTED");
    const sessionEndedEvent = payload.events.find((event) => event.type === "SESSION_ENDED");
    return prisma.$transaction(async (tx) => {
        const session = await tx.reforgerSession.upsert({
            where: {
                serverId_sessionId: {
                    serverId: payload.serverId,
                    sessionId: payload.sessionId,
                },
            },
            update: sessionEndedEvent
                ? {
                    endedAt: new Date(sessionEndedEvent.timestamp * 1000),
                }
                : {},
            create: {
                serverId: payload.serverId,
                sessionId: payload.sessionId,
                missionId: payload.missionId,
                missionName: payload.missionName ?? null,
                startedAt: sessionStartedEvent ? new Date(sessionStartedEvent.timestamp * 1000) : null,
                endedAt: sessionEndedEvent ? new Date(sessionEndedEvent.timestamp * 1000) : null,
            },
        });
        const objectiveInputs = new Map();
        for (const event of payload.events) {
            if (!event.taskId)
                continue;
            const objective = objectiveInputs.get(event.taskId) ?? { taskId: event.taskId };
            if (event.taskTitle !== undefined)
                objective.title = event.taskTitle;
            if (event.taskDescription !== undefined)
                objective.description = event.taskDescription;
            objectiveInputs.set(event.taskId, objective);
        }
        const objectives = await Promise.all([...objectiveInputs.values()].map((objective) => tx.reforgerObjective.upsert({
            where: {
                sessionDbId_taskId: {
                    sessionDbId: session.id,
                    taskId: objective.taskId,
                },
            },
            update: {
                ...(objective.title !== undefined ? { title: objective.title } : {}),
                ...(objective.description !== undefined ? { description: objective.description } : {}),
            },
            create: {
                sessionDbId: session.id,
                taskId: objective.taskId,
                title: objective.title ?? null,
                description: objective.description ?? null,
            },
        })));
        const objectiveIds = new Map(objectives.map((objective) => [objective.taskId, objective.id]));
        const result = await tx.reforgerEvent.createMany({
            data: payload.events.map((event) => ({
                eventId: event.eventId,
                sessionDbId: session.id,
                type: event.type,
                taskId: event.taskId ?? null,
                objectiveDbId: event.taskId ? (objectiveIds.get(event.taskId) ?? null) : null,
                oldState: event.oldState ?? null,
                oldStateName: event.oldStateName ?? null,
                newState: event.newState ?? null,
                newStateName: event.newStateName ?? null,
                eventTimestamp: new Date(event.timestamp * 1000),
                rawJson: event,
            })),
            skipDuplicates: true,
        });
        return result.count;
    });
}
//# sourceMappingURL=saveReforgerEvents.js.map