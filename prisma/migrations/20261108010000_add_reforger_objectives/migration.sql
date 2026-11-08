-- CreateTable
CREATE TABLE "ReforgerObjective" (
    "id" TEXT NOT NULL,
    "sessionDbId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReforgerObjective_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "ReforgerEvent" ADD COLUMN "objectiveDbId" TEXT;

-- Backfill one objective per existing session/task pair. Historical payloads
-- did not contain objective text, so title and description remain null.
INSERT INTO "ReforgerObjective" (
    "id",
    "sessionDbId",
    "taskId",
    "createdAt",
    "updatedAt"
)
SELECT
    'legacy_' || md5("sessionDbId" || ':' || "taskId"),
    "sessionDbId",
    "taskId",
    MIN("createdAt"),
    CURRENT_TIMESTAMP
FROM "ReforgerEvent"
WHERE "taskId" IS NOT NULL
GROUP BY "sessionDbId", "taskId";

UPDATE "ReforgerEvent" AS event
SET "objectiveDbId" = objective."id"
FROM "ReforgerObjective" AS objective
WHERE objective."sessionDbId" = event."sessionDbId"
  AND objective."taskId" = event."taskId";

-- CreateIndex
CREATE UNIQUE INDEX "ReforgerObjective_sessionDbId_taskId_key"
ON "ReforgerObjective"("sessionDbId", "taskId");

CREATE INDEX "ReforgerObjective_taskId_idx"
ON "ReforgerObjective"("taskId");

CREATE INDEX "ReforgerEvent_objectiveDbId_idx"
ON "ReforgerEvent"("objectiveDbId");

-- AddForeignKey
ALTER TABLE "ReforgerObjective"
ADD CONSTRAINT "ReforgerObjective_sessionDbId_fkey"
FOREIGN KEY ("sessionDbId") REFERENCES "ReforgerSession"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReforgerEvent"
ADD CONSTRAINT "ReforgerEvent_objectiveDbId_fkey"
FOREIGN KEY ("objectiveDbId") REFERENCES "ReforgerObjective"("id")
ON DELETE SET NULL ON UPDATE CASCADE;
