import test from "node:test";
import assert from "node:assert/strict";

import { ReforgerPayloadSchema } from "../src/schemas/reforger.js";

test("Reforger payload accepts objective title and description", () => {
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
                taskTitle: "Secure the town",
                taskDescription: "Eliminate the hostile forces in the objective area.",
            },
        ],
    });

    assert.equal(result.success, true);
});
