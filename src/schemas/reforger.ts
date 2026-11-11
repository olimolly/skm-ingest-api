import { z } from "zod";

export const ReforgerEventSchema = z.object({
    eventId: z.string(),

    type: z.string(),
    timestamp: z.number(),

    taskId: z.string().optional(),
    parentTaskId: z.string().optional(),
    taskTitle: z.string().max(250).optional(),
    taskDescription: z.string().max(4000).optional(),

    oldState: z.number().optional(),
    oldStateName: z.string().optional(),

    newState: z.number().optional(),
    newStateName: z.string().optional(),

    oldProgress: z.number().min(0).max(100).optional(),
    newProgress: z.number().min(0).max(100).optional(),
}).superRefine((event, ctx) => {
    const requiresTaskId = event.parentTaskId !== undefined
        || event.oldProgress !== undefined
        || event.newProgress !== undefined;

    if (requiresTaskId && !event.taskId) {
        ctx.addIssue({
            code: "custom",
            path: ["taskId"],
            message: "taskId is required for objective hierarchy or progress",
        });
    }
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
