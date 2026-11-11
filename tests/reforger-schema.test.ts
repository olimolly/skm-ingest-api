import test from "node:test";
import assert from "node:assert/strict";

import { ReforgerPayloadSchema } from "../src/schemas/reforger.js";

test("Reforger payload accepts objective metadata and progress", () => {
    const result = ReforgerPayloadSchema.safeParse({
        apiKey: "test-key",
        serverId: "server-1",
        sessionId: "session-1",
        missionId: "mission-1",
        events: [
            {
                eventId: "event-1",
                type: "OBJECTIVE_STATE_CHANGED",
                timestamp: 1780828484,
                taskId: "task-1",
                parentTaskId: "parent-task-1",
                taskTitle: "Secure the town",
                taskDescription: "Eliminate the hostile forces in the objective area.",
                oldProgress: 25,
                newProgress: 62.5,
            },
        ],
    });

    assert.equal(result.success, true);
});

test("Reforger payload rejects objective progress outside 0..100", () => {
    const result = ReforgerPayloadSchema.safeParse({
        apiKey: "test-key",
        serverId: "server-1",
        sessionId: "session-1",
        missionId: "mission-1",
        events: [
            {
                eventId: "event-1",
                type: "OBJECTIVE_PROGRESS_CHANGED",
                timestamp: 1780828484,
                taskId: "task-1",
                oldProgress: 50,
                newProgress: 101,
            },
        ],
    });

    assert.equal(result.success, false);
});

test("Reforger payload rejects objective progress without taskId", () => {
    const result = ReforgerPayloadSchema.safeParse({
        apiKey: "test-key",
        serverId: "server-1",
        sessionId: "session-1",
        missionId: "mission-1",
        events: [
            {
                eventId: "event-1",
                type: "OBJECTIVE_PROGRESS_CHANGED",
                timestamp: 1780828484,
                newProgress: 50,
            },
        ],
    });

    assert.equal(result.success, false);
});
