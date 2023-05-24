/*
  Warnings:

  - You are about to drop the column `ci` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `RucClient` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type]` on the table `TypeProcessAppointments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "ci";

-- AlterTable
ALTER TABLE "RucClient" DROP COLUMN "address";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "lat" TEXT,
ADD COLUMN     "lng" TEXT;

-- CreateTable
CREATE TABLE "Schedule" (
    "id_schedule" TEXT NOT NULL,
    "monday" TEXT,
    "tuesday" TEXT,
    "wednesday" TEXT,
    "thursday" TEXT,
    "friday" TEXT,
    "saturday" TEXT,
    "sunday" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id_schedule")
);

-- CreateTable
CREATE TABLE "_ProductToTypeProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_company_id_key" ON "Schedule"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToTypeProduct_AB_unique" ON "_ProductToTypeProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToTypeProduct_B_index" ON "_ProductToTypeProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "TypeProcessAppointments_type_key" ON "TypeProcessAppointments"("type");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTypeProduct" ADD CONSTRAINT "_ProductToTypeProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTypeProduct" ADD CONSTRAINT "_ProductToTypeProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "TypeProduct"("id_type_product") ON DELETE CASCADE ON UPDATE CASCADE;
