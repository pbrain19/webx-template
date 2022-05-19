-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "daoId" INTEGER;

-- CreateTable
CREATE TABLE "Dao" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "twitter" TEXT,
    "link" TEXT,
    "discord" TEXT,
    "address" TEXT,
    "authorId" INTEGER NOT NULL,
    "deleted" TIMESTAMP(3),

    CONSTRAINT "Dao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dao_uuid_key" ON "Dao"("uuid");

-- AddForeignKey
ALTER TABLE "Dao" ADD CONSTRAINT "Dao_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_daoId_fkey" FOREIGN KEY ("daoId") REFERENCES "Dao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
