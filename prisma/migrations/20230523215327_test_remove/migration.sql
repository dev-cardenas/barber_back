/*
  Warnings:

  - Made the column `account_plan_id` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ruc_id` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_account_plan_id_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_ruc_id_fkey";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "account_plan_id" SET NOT NULL,
ALTER COLUMN "ruc_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_account_plan_id_fkey" FOREIGN KEY ("account_plan_id") REFERENCES "AccountPlan"("id_account_plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_ruc_id_fkey" FOREIGN KEY ("ruc_id") REFERENCES "RucConfig"("id_ruc") ON DELETE RESTRICT ON UPDATE CASCADE;
