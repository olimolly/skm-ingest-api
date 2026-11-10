import test from "node:test";
import assert from "node:assert/strict";

process.env.INTERNAL_API_KEY = "internal-dev-secret";

const { buildApp } = await import("../src/app.js");

test("GET /internal/sessions returns 401 without Authorization header", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "GET",
        url: "/internal/sessions",
    });

    assert.equal(response.statusCode, 401);
});

test("GET /internal/sessions returns 200 with valid Authorization header", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "GET",
        url: "/internal/sessions",
        headers: {
            authorization: "Bearer internal-dev-secret",
        },
    });

    assert.equal(response.statusCode, 200);

    const body = response.json();

    assert.equal(body.ok, true);
    assert.ok(Array.isArray(body.sessions));
});

test("GET /internal/sessions accepts q with exactly 80 characters", async (t) => {
    const app = buildApp();
    t.after(() => app.close());

    const response = await app.inject({
        method: "GET",
        url: `/internal/sessions?q=${"a".repeat(80)}`,
        headers: {
            authorization: "Bearer internal-dev-secret",
        },
    });

    assert.equal(response.statusCode, 200);
});

test("GET /internal/sessions rejects q longer than 80 characters", async (t) => {
    const app = buildApp();
    t.after(() => app.close());

    const response = await app.inject({
        method: "GET",
        url: `/internal/sessions?q=${"a".repeat(81)}`,
        headers: {
            authorization: "Bearer internal-dev-secret",
        },
    });

    assert.equal(response.statusCode, 400);
    assert.deepEqual(response.json(), {
        error: "Invalid query",
        message: "q must not exceed 80 characters",
    });
});

test("GET /internal/servers/:serverId/sessions/:sessionId returns 401 without Authorization header", async () => {
    const app = buildApp();

    const response = await app.inject({
        method: "GET",
        url: "/internal/servers/server-1/sessions/session-1",
    });

    assert.equal(response.statusCode, 401);
});
