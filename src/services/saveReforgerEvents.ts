import { prisma } from "../lib/prisma.js";
import type { ReforgerPayload } from "../schemas/reforger.js";

export async function saveReforgerEvents(payload: ReforgerPayload) {
    const sessionStartedEvent = payload.events.find((event) => event.type === "SESSION_STARTED");
    const sessionEndedEvent = payload.events.find((event) => event.type === "SESSION_ENDED");

    const session = await prisma.reforgerSession.upsert({
        where: {
            sessionId: payload.sessionId,
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

    const result = await prisma.reforgerEvent.createMany({
        data: payload.events.map((event) => ({
            eventId: event.eventId,
            sessionDbId: session.id,
            type: event.type,
            taskId: event.taskId ?? null,
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
}