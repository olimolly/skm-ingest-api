import test from "node:test";
import assert from "node:assert/strict";

import { buildApp } from "../src/app.js";

process.env.INTERNAL_API_KEY = "internal-dev-secret";

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
