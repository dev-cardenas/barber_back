/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `AccountPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `AccountPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AccountPlan_code_key" ON "AccountPlan"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AccountPlan_name_key" ON "AccountPlan"("name");
