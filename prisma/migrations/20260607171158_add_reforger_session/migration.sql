/*
  Warnings:

  - You are about to drop the column `missionId` on the `ReforgerEvent` table. All the data in the column will be lost.
  - You are about to drop the column `missionName` on the `ReforgerEvent` table. All the data in the column will be lost.
  - You are about to drop the column `serverId` on the `ReforgerEvent` table. All the data in the column will be lost.
  - You are about to drop the column `sessionId` on the `ReforgerEvent` table. All the data in the column will be lost.
  - Added the required column `sessionDbId` to the `ReforgerEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReforgerEvent" DROP COLUMN "missionId",
DROP COLUMN "missionName",
DROP COLUMN "serverId",
DROP COLUMN "sessionId",
ADD COLUMN     "sessionDbId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ReforgerSession" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "missionId" TEXT NOT NULL,
    "missionName" TEXT,
    "startedAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReforgerSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ReforgerSession_sessionId_key" ON "ReforgerSession"("sessionId");

-- AddForeignKey
ALTER TABLE "ReforgerEvent" ADD CONSTRAINT "ReforgerEvent_sessionDbId_fkey" FOREIGN KEY ("sessionDbId") REFERENCES "ReforgerSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
