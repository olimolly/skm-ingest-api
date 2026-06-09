/*
  Warnings:

  - A unique constraint covering the columns `[eventId]` on the table `ReforgerEvent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventId` to the `ReforgerEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReforgerEvent" ADD COLUMN     "eventId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ReforgerEvent_eventId_key" ON "ReforgerEvent"("eventId");
