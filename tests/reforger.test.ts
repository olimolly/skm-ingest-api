import test from "node:test";
import assert from "node:assert/strict";

import { buildApp } from "../src/app.js";

const TEST_REFORGER_API_KEY = "test-reforger-api-key";

process.env.REFORGER_API_KEY = TEST_REFORGER_API_KEY;
process.env.ALLOWED_REFORGER_SERVER_IDS = "local-reforger";
process.env.ALLOWED_REFORGER_IPS = "";

test("POST /reforger/events should accept a valid authenticated Reforger payload", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        headers: {
            "x-api-key": TEST_REFORGER_API_KEY,
        },
        payload: {
            serverId: "local-reforger",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            missionName: "Olives & Dates",
            events: [
                {
                    eventId: "session_1_000001",
                    type: "SESSION_STARTED",
                    timestamp: 1780828484,
                },
                {
                    eventId: "session_1_000001_objective",
                    type: "OBJECTIVE_STATE_CHANGED",
                    taskId: "task_1_1",
                    parentTaskId: "task_parent_1",
                    taskTitle: "Secure the town",
                    taskDescription: "Eliminate the hostile forces in the objective area.",
                    oldStateName: "ASSIGNED",
                    newStateName: "PROGRESSED",
                    oldProgress: 0,
                    newProgress: 25,
                    timestamp: 1780828490,
                },
            ],
        },
    });

    assert.equal(response.statusCode, 200);

    const body = response.json();

    assert.equal(body.ok, true);
});

test("POST /reforger/events should reject a request without X-Api-Key", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        payload: {
            serverId: "local-reforger",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            events: [],
        },
    });

    assert.equal(response.statusCode, 401);
});

test("POST /reforger/events should reject an invalid X-Api-Key", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        headers: {
            "x-api-key": "wrong",
        },
        payload: {
            serverId: "local-reforger",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            events: [
                {
                    eventId: "session_1_000002",
                    type: "SESSION_STARTED",
                    timestamp: 1780828484,
                },
            ],
        },
    });

    assert.equal(response.statusCode, 401);
});

test("POST /reforger/events should reject a payload from a non-whitelisted serverId", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        headers: {
            "x-api-key": TEST_REFORGER_API_KEY,
        },
        payload: {
            serverId: "unknown-server",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            events: [
                {
                    eventId: "session_1_000003",
                    type: "SESSION_STARTED",
                    timestamp: 1780828484,
                },
            ],
        },
    });

    assert.equal(response.statusCode, 403);
});

test("POST /reforger/events should temporarily accept the deprecated body apiKey", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        payload: {
            apiKey: TEST_REFORGER_API_KEY,
            serverId: "unknown-server",
            sessionId: "legacy-client-session",
            missionId: "olives_and_dates",
            events: [],
        },
    });

    // Authentication passed: the request reached the serverId whitelist.
    assert.equal(response.statusCode, 403);
});

test("POST /reforger/events should not fall back to body apiKey when a header is present", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        headers: {
            "x-api-key": "wrong",
        },
        payload: {
            apiKey: TEST_REFORGER_API_KEY,
            serverId: "local-reforger",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            events: [],
        },
    });

    assert.equal(response.statusCode, 401);
});
