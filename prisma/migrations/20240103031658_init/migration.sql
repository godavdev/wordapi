/*
  Warnings:

  - Made the column `categoryId` on table `Word` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_categoryId_fkey";

-- AlterTable
ALTER TABLE "Word" ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
