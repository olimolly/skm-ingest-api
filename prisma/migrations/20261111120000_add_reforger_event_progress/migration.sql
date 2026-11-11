ALTER TABLE "ReforgerEvent"
ADD COLUMN "oldProgress" DOUBLE PRECISION,
ADD COLUMN "newProgress" DOUBLE PRECISION;

ALTER TABLE "ReforgerEvent"
ADD CONSTRAINT "ReforgerEvent_oldProgress_range_check"
CHECK ("oldProgress" IS NULL OR ("oldProgress" >= 0 AND "oldProgress" <= 100)),
ADD CONSTRAINT "ReforgerEvent_newProgress_range_check"
CHECK ("newProgress" IS NULL OR ("newProgress" >= 0 AND "newProgress" <= 100));

ALTER TABLE "ReforgerObjective"
ADD COLUMN "parentTaskId" TEXT;

CREATE INDEX "ReforgerObjective_sessionDbId_parentTaskId_idx"
ON "ReforgerObjective"("sessionDbId", "parentTaskId");
