-- A session identifier is only unique within a Reforger server.
DROP INDEX "ReforgerSession_sessionId_key";

CREATE UNIQUE INDEX "ReforgerSession_serverId_sessionId_key"
ON "ReforgerSession"("serverId", "sessionId");

-- Supports the backward-compatible lookup by sessionId alone.
CREATE INDEX "ReforgerSession_sessionId_idx"
ON "ReforgerSession"("sessionId");
