-- AlterTable
ALTER TABLE "slider" ALTER COLUMN "value" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "slider_history" (
    "id" SERIAL NOT NULL,
    "editDate" TIMESTAMP(3) NOT NULL,
    "editorName" TEXT,
    "editorId" INTEGER NOT NULL,
    "nextValue" INTEGER NOT NULL,
    "prevValue" INTEGER NOT NULL,
    "sliderId" INTEGER NOT NULL,

    CONSTRAINT "slider_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "slider_history" ADD CONSTRAINT "slider_history_sliderId_fkey" FOREIGN KEY ("sliderId") REFERENCES "slider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
