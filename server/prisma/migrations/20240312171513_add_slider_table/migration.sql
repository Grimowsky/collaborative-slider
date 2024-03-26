-- CreateTable
CREATE TABLE "slider" (
    "id" SERIAL NOT NULL,
    "lastEdited" TIMESTAMP(3) NOT NULL,
    "lastEditorName" TEXT,
    "lastEditorId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "slider_pkey" PRIMARY KEY ("id")
);
