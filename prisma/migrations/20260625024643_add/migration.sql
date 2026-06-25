/*
  Warnings:

  - You are about to drop the column `events` on the `Integration` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[external_id]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Integration" DROP COLUMN "events";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_external_id_key" ON "Client"("external_id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "Integration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
