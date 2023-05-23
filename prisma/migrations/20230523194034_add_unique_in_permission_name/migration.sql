/*
  Warnings:

  - A unique constraint covering the columns `[user_permission]` on the table `UserPermission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserPermission_user_permission_key" ON "UserPermission"("user_permission");
