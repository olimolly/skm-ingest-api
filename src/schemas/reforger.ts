import { z } from "zod";

export const ReforgerEventSchema = z.object({
    eventId: z.string(),

    type: z.string(),
    timestamp: z.number(),

    taskId: z.string().optional(),
    taskTitle: z.string().max(250).optional(),
    taskDescription: z.string().max(4000).optional(),

    oldState: z.number().optional(),
    oldStateName: z.string().optional(),

    newState: z.number().optional(),
    newStateName: z.string().optional(),
});

export const ReforgerPayloadSchema = z.object({
    apiKey: z.string(),

    serverId: z.string(),

    sessionId: z.string(),

    missionId: z.string(),
    missionName: z.string().optional(),

    events: z.array(ReforgerEventSchema).max(100),
});

export type ReforgerPayload = z.infer<typeof ReforgerPayloadSchema>;
