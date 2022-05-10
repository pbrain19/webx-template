/*
  Warnings:

  - You are about to drop the column `response` on the `Response` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dateAdded` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responseText` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Response" DROP COLUMN "response",
ADD COLUMN     "dateAdded" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "responseText" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
