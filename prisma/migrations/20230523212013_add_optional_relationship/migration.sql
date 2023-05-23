-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_account_plan_id_fkey";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "account_plan_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_account_plan_id_fkey" FOREIGN KEY ("account_plan_id") REFERENCES "AccountPlan"("id_account_plan") ON DELETE SET NULL ON UPDATE CASCADE;
