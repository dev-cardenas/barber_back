/*
  Warnings:

  - You are about to drop the column `ruc_id` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[company_id]` on the table `RucConfig` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `company_id` to the `RucConfig` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_ruc_id_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "ruc_id";

-- AlterTable
ALTER TABLE "RucConfig" ADD COLUMN     "company_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RucConfig_company_id_key" ON "RucConfig"("company_id");

-- AddForeignKey
ALTER TABLE "RucConfig" ADD CONSTRAINT "RucConfig_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;
