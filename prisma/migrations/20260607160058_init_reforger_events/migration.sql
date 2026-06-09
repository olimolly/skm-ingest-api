-- CreateTable
CREATE TABLE "ReforgerEvent" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "missionId" TEXT NOT NULL,
    "missionName" TEXT,
    "type" TEXT NOT NULL,
    "taskId" TEXT,
    "oldState" INTEGER,
    "oldStateName" TEXT,
    "newState" INTEGER,
    "newStateName" TEXT,
    "eventTimestamp" TIMESTAMP(3) NOT NULL,
    "rawJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReforgerEvent_pkey" PRIMARY KEY ("id")
);
