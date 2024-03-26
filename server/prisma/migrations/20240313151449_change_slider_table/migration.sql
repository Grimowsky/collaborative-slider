/*
  Warnings:

  - You are about to drop the column `lastEdited` on the `slider` table. All the data in the column will be lost.
  - You are about to drop the column `lastEditorId` on the `slider` table. All the data in the column will be lost.
  - You are about to drop the column `lastEditorName` on the `slider` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "slider" DROP COLUMN "lastEdited",
DROP COLUMN "lastEditorId",
DROP COLUMN "lastEditorName";
