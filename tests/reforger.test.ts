process.env.REFORGER_API_KEY = "dev-secret";
import test from "node:test";
import assert from "node:assert/strict";

import { buildApp } from "../src/app.js";

test("POST /reforger/events returns 200 with valid payload", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        payload: {
            apiKey: "dev-secret",
            serverId: "local-reforger",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            missionName: "Olives & Dates",
            events: [
                {
                    type: "SESSION_STARTED",
                    timestamp: 1780828484,
                },
            ],
        },
    });

    assert.equal(response.statusCode, 200);

    const body = response.json();

    assert.equal(body.ok, true);
});

test("POST /reforger/events returns 401 with invalid apiKey", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        payload: {
            apiKey: "wrong",
            serverId: "local-reforger",
            sessionId: "session_1",
            missionId: "olives_and_dates",
            events: [],
        },
    });

    assert.equal(response.statusCode, 401);
});