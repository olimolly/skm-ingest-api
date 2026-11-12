import test from "node:test";
import assert from "node:assert/strict";

process.env.INTERNAL_API_KEY = "rate-limit-test-secret";

const { buildApp } = await import("../src/app.js");

test("GET /internal/sessions rejects requests after 60 calls from the same Render client IP", async (t) => {
    const app = buildApp();
    t.after(() => app.close());

    for (let requestNumber = 1; requestNumber <= 65; requestNumber += 1) {
        const response = await app.inject({
            method: "GET",
            url: "/internal/sessions",
            remoteAddress: "10.0.0.1",
            headers: {
                "cf-connecting-ip": "203.0.113.10",
                // A caller-controlled X-Forwarded-For value must not create a new bucket.
                "x-forwarded-for": `198.51.100.${requestNumber}`,
            },
        });

        assert.equal(response.headers["x-ratelimit-limit"], "60");

        if (requestNumber <= 60) {
            assert.equal(response.statusCode, 401);
            assert.equal(response.headers["x-ratelimit-remaining"], String(60 - requestNumber));
        } else {
            assert.equal(response.statusCode, 429);
            assert.equal(response.headers["x-ratelimit-remaining"], "0");
            assert.ok(response.headers["retry-after"]);
        }
    }
});

test("GET /health is explicitly exempt from rate limiting", async (t) => {
    const app = buildApp();
    t.after(() => app.close());

    for (let requestNumber = 1; requestNumber <= 65; requestNumber += 1) {
        const response = await app.inject({
            method: "GET",
            url: "/health",
            headers: {
                "cf-connecting-ip": "203.0.113.10",
            },
        });

        assert.equal(response.statusCode, 200);
        assert.equal(response.headers["x-ratelimit-limit"], undefined);
    }
});

test("POST /reforger/events uses the trusted Render client IP for the whitelist", async (t) => {
    const previousApiKey = process.env.REFORGER_API_KEY;
    const previousServerIds = process.env.ALLOWED_REFORGER_SERVER_IDS;
    const previousIps = process.env.ALLOWED_REFORGER_IPS;

    process.env.REFORGER_API_KEY = "reforger-test-secret";
    process.env.ALLOWED_REFORGER_SERVER_IDS = "test-server";
    process.env.ALLOWED_REFORGER_IPS = "198.51.100.25";

    t.after(() => {
        if (previousApiKey === undefined) delete process.env.REFORGER_API_KEY;
        else process.env.REFORGER_API_KEY = previousApiKey;

        if (previousServerIds === undefined) delete process.env.ALLOWED_REFORGER_SERVER_IDS;
        else process.env.ALLOWED_REFORGER_SERVER_IDS = previousServerIds;

        if (previousIps === undefined) delete process.env.ALLOWED_REFORGER_IPS;
        else process.env.ALLOWED_REFORGER_IPS = previousIps;
    });

    const app = buildApp();
    t.after(() => app.close());

    const response = await app.inject({
        method: "POST",
        url: "/reforger/events",
        headers: {
            "x-api-key": "reforger-test-secret",
            "cf-connecting-ip": "203.0.113.10",
            // The allow-listed spoofed value must not be used by the whitelist.
            "x-forwarded-for": "198.51.100.25",
        },
        payload: {
            serverId: "test-server",
            sessionId: "rate-limit-test-session",
            missionId: "rate-limit-test-mission",
            events: [{
                eventId: "rate-limit-test-event",
                type: "SESSION_STARTED",
                timestamp: 1_800_000_000,
            }],
        },
    });

    assert.equal(response.statusCode, 403);
    assert.deepEqual(response.json(), { error: "Forbidden IP" });
});
