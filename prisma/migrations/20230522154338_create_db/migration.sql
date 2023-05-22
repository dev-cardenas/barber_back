-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL,
    "name" TEXT,
    "last_name" TEXT,
    "address" TEXT,
    "hours_available" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "image" TEXT,
    "whatsapp" TEXT,
    "is_blocked" BOOLEAN NOT NULL DEFAULT false,
    "password_hash" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "company_id" TEXT,
    "type_user_id" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "RucClient" (
    "id_ruc_client" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "address" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "RucClient_pkey" PRIMARY KEY ("id_ruc_client")
);

-- CreateTable
CREATE TABLE "RucConfig" (
    "id_ruc" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "sign_digital_date" TIMESTAMP(3) NOT NULL,
    "version" TEXT NOT NULL,
    "business_name" TEXT NOT NULL,
    "fantasy_name" TEXT NOT NULL,
    "stamped_number" TEXT NOT NULL,
    "stamped_date" TEXT NOT NULL,
    "taxpayer_type" TEXT NOT NULL,
    "regime_type" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RucConfig_pkey" PRIMARY KEY ("id_ruc")
);

-- CreateTable
CREATE TABLE "EconomicActivities" (
    "id_economic_activities" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EconomicActivities_pkey" PRIMARY KEY ("id_economic_activities")
);

-- CreateTable
CREATE TABLE "Establishments" (
    "id_establishments" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address_one_street" TEXT NOT NULL,
    "address_two_street" TEXT NOT NULL,
    "house_number" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "department_description" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "district_description" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "city_description" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "denomination" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "ruc_id" TEXT NOT NULL,

    CONSTRAINT "Establishments_pkey" PRIMARY KEY ("id_establishments")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id_appointments" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "canceled_at" TIMESTAMP(3),
    "process" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "type_process_appointments_id" TEXT,
    "client_id" TEXT,
    "provider_id" TEXT,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id_appointments")
);

-- CreateTable
CREATE TABLE "TypeProcessAppointments" (
    "id_type_process_appointments" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeProcessAppointments_pkey" PRIMARY KEY ("id_type_process_appointments")
);

-- CreateTable
CREATE TABLE "TypeUser" (
    "id_type_user" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeUser_pkey" PRIMARY KEY ("id_type_user")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id_notification" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "slug" TEXT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id_notification")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id_user_role" TEXT NOT NULL,
    "user_role" TEXT NOT NULL,
    "description" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id_user_role")
);

-- CreateTable
CREATE TABLE "UserPermission" (
    "id_user_permission" TEXT NOT NULL,
    "user_permission" TEXT NOT NULL,
    "description" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "UserPermission_pkey" PRIMARY KEY ("id_user_permission")
);

-- CreateTable
CREATE TABLE "Company" (
    "id_company" TEXT NOT NULL,
    "address" TEXT,
    "company_name" TEXT NOT NULL,
    "slug" TEXT,
    "city" TEXT NOT NULL,
    "lat" TEXT,
    "lng" TEXT,
    "ci" TEXT,
    "email" TEXT NOT NULL,
    "hours_available" INTEGER NOT NULL,
    "link_instagram" TEXT,
    "link_twitter" TEXT,
    "link_facebook" TEXT,
    "payment_date" TIMESTAMP(3),
    "notice_of_payment" TIMESTAMP(3),
    "phone" TEXT,
    "whatsapp" TEXT,
    "account_recovery_email" TEXT,
    "payment_status" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "account_plan_id" TEXT NOT NULL,
    "ruc_id" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id_company")
);

-- CreateTable
CREATE TABLE "AccountPlan" (
    "id_account_plan" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "available_days" INTEGER NOT NULL,
    "is_delete" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountPlan_pkey" PRIMARY KEY ("id_account_plan")
);

-- CreateTable
CREATE TABLE "TypeBusisness" (
    "id_type_busisness" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeBusisness_pkey" PRIMARY KEY ("id_type_busisness")
);

-- CreateTable
CREATE TABLE "TypeProduct" (
    "id_type_product" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeProduct_pkey" PRIMARY KEY ("id_type_product")
);

-- CreateTable
CREATE TABLE "CoinType" (
    "id_coin_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoinType_pkey" PRIMARY KEY ("id_coin_type")
);

-- CreateTable
CREATE TABLE "Product" (
    "id_product" TEXT NOT NULL,
    "barcode" TEXT,
    "color" TEXT,
    "name" TEXT NOT NULL,
    "hours_and_minutes" TEXT,
    "measure" TEXT,
    "size" TEXT,
    "weight" INTEGER,
    "type_weight" TEXT,
    "liter" INTEGER,
    "price_cost" INTEGER,
    "price_sale" INTEGER,
    "price_promotion" INTEGER,
    "price_wholesaler" INTEGER,
    "product_code" TEXT,
    "product_sku" TEXT,
    "images" TEXT,
    "erase_code" TEXT,
    "description" TEXT,
    "slug" TEXT,
    "tags" TEXT,
    "assessment" TEXT,
    "features" TEXT,
    "lote" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "brand_id" TEXT,
    "company_id" TEXT,
    "base_product_id" TEXT,
    "stock_id" TEXT,
    "tax_id" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "ProductBase" (
    "id_product_base" TEXT NOT NULL,
    "barcode" TEXT,
    "color" TEXT,
    "name" TEXT NOT NULL,
    "hours_and_minutes" TEXT,
    "measure" TEXT,
    "size" TEXT,
    "weight" INTEGER,
    "type_weight" TEXT,
    "liter" INTEGER,
    "price_cost" INTEGER,
    "price_sale" INTEGER,
    "price_promotion" INTEGER,
    "price_wholesaler" INTEGER,
    "product_code" TEXT,
    "product_sku" TEXT,
    "images" TEXT,
    "erase_code" TEXT,
    "description" TEXT,
    "slug" TEXT,
    "tags" TEXT,
    "assessment" TEXT,
    "features" TEXT,
    "lote" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "brand_id" TEXT,
    "company_id" TEXT,
    "tax_id" TEXT,

    CONSTRAINT "ProductBase_pkey" PRIMARY KEY ("id_product_base")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id_brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id_brand")
);

-- CreateTable
CREATE TABLE "Tax" (
    "id_tax" TEXT NOT NULL,
    "percentage" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "slug" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tax_pkey" PRIMARY KEY ("id_tax")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id_stock" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "min_stock" INTEGER,
    "max_stock" INTEGER,
    "quantity" INTEGER,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deposit_id" TEXT NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id_stock")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id_deposit" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "lat" TEXT,
    "lng" TEXT,
    "slug" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id_deposit")
);

-- CreateTable
CREATE TABLE "ProductPriceHistory" (
    "id_product_history" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "price_cost" INTEGER,
    "price_sale" INTEGER,
    "price_promotion" INTEGER,
    "slug" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_base_id" TEXT NOT NULL,

    CONSTRAINT "ProductPriceHistory_pkey" PRIMARY KEY ("id_product_history")
);

-- CreateTable
CREATE TABLE "Category" (
    "id_category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id_sub_category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id_sub_category")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id_invoice" TEXT NOT NULL,
    "details" TEXT,
    "stamped" TEXT,
    "invoice_number" TEXT,
    "slug" TEXT,
    "status" TEXT,
    "beginning_of_validity" TIMESTAMP(3) NOT NULL,
    "validity_date" TIMESTAMP(3) NOT NULL,
    "date_of_issue" TIMESTAMP(3) NOT NULL,
    "sub_total" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "sale_condition" TEXT NOT NULL,
    "tax_type" INTEGER NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id_invoice")
);

-- CreateTable
CREATE TABLE "Provider" (
    "id_provider" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "business_name" TEXT,
    "address" TEXT,
    "email" TEXT,
    "slug" TEXT,
    "ruc" TEXT,
    "ci" TEXT,
    "phone" TEXT,
    "whatsapp" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id_provider")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id_sale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "is_canceled" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id_sale")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id_ticket" TEXT NOT NULL,
    "is_canceled" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "client_id" TEXT,
    "provider_id" TEXT,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id_ticket")
);

-- CreateTable
CREATE TABLE "_UserToUserRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EconomicActivitiesToRucConfig" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserPermissionToUserRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CompanyToTypeBusisness" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToSale" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToSubCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToProvider" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductBaseToSubCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductBaseToProvider" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToProductBase" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToSubCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RucClient_user_id_key" ON "RucClient"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeUser_type_key" ON "TypeUser"("type");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_user_role_key" ON "UserRole"("user_role");

-- CreateIndex
CREATE UNIQUE INDEX "TypeBusisness_type_key" ON "TypeBusisness"("type");

-- CreateIndex
CREATE UNIQUE INDEX "TypeProduct_type_key" ON "TypeProduct"("type");

-- CreateIndex
CREATE UNIQUE INDEX "CoinType_name_key" ON "CoinType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CoinType_symbol_key" ON "CoinType"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_code_key" ON "Product"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "ProductBase_barcode_key" ON "ProductBase"("barcode");

-- CreateIndex
CREATE UNIQUE INDEX "ProductBase_product_code_key" ON "ProductBase"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tax_percentage_key" ON "Tax"("percentage");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_deposit_id_key" ON "Stock"("deposit_id");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToUserRole_AB_unique" ON "_UserToUserRole"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToUserRole_B_index" ON "_UserToUserRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EconomicActivitiesToRucConfig_AB_unique" ON "_EconomicActivitiesToRucConfig"("A", "B");

-- CreateIndex
CREATE INDEX "_EconomicActivitiesToRucConfig_B_index" ON "_EconomicActivitiesToRucConfig"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserPermissionToUserRole_AB_unique" ON "_UserPermissionToUserRole"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPermissionToUserRole_B_index" ON "_UserPermissionToUserRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToTypeBusisness_AB_unique" ON "_CompanyToTypeBusisness"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToTypeBusisness_B_index" ON "_CompanyToTypeBusisness"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSale_AB_unique" ON "_ProductToSale"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSale_B_index" ON "_ProductToSale"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSubCategory_AB_unique" ON "_ProductToSubCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSubCategory_B_index" ON "_ProductToSubCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProvider_AB_unique" ON "_ProductToProvider"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProvider_B_index" ON "_ProductToProvider"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductBaseToSubCategory_AB_unique" ON "_ProductBaseToSubCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductBaseToSubCategory_B_index" ON "_ProductBaseToSubCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductBaseToProvider_AB_unique" ON "_ProductBaseToProvider"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductBaseToProvider_B_index" ON "_ProductBaseToProvider"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProductBase_AB_unique" ON "_CategoryToProductBase"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProductBase_B_index" ON "_CategoryToProductBase"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToSubCategory_AB_unique" ON "_CategoryToSubCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToSubCategory_B_index" ON "_CategoryToSubCategory"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id_company") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_type_user_id_fkey" FOREIGN KEY ("type_user_id") REFERENCES "TypeUser"("id_type_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RucClient" ADD CONSTRAINT "RucClient_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Establishments" ADD CONSTRAINT "Establishments_ruc_id_fkey" FOREIGN KEY ("ruc_id") REFERENCES "RucConfig"("id_ruc") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_type_process_appointments_id_fkey" FOREIGN KEY ("type_process_appointments_id") REFERENCES "TypeProcessAppointments"("id_type_process_appointments") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "User"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_account_plan_id_fkey" FOREIGN KEY ("account_plan_id") REFERENCES "AccountPlan"("id_account_plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_ruc_id_fkey" FOREIGN KEY ("ruc_id") REFERENCES "RucConfig"("id_ruc") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id_brand") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id_company") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_base_product_id_fkey" FOREIGN KEY ("base_product_id") REFERENCES "ProductBase"("id_product_base") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "Stock"("id_stock") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "Tax"("id_tax") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBase" ADD CONSTRAINT "ProductBase_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id_brand") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBase" ADD CONSTRAINT "ProductBase_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id_company") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBase" ADD CONSTRAINT "ProductBase_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "Tax"("id_tax") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_deposit_id_fkey" FOREIGN KEY ("deposit_id") REFERENCES "Deposit"("id_deposit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPriceHistory" ADD CONSTRAINT "ProductPriceHistory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPriceHistory" ADD CONSTRAINT "ProductPriceHistory_product_base_id_fkey" FOREIGN KEY ("product_base_id") REFERENCES "ProductBase"("id_product_base") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Ticket"("id_ticket") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "User"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserRole" ADD CONSTRAINT "_UserToUserRole_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToUserRole" ADD CONSTRAINT "_UserToUserRole_B_fkey" FOREIGN KEY ("B") REFERENCES "UserRole"("id_user_role") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EconomicActivitiesToRucConfig" ADD CONSTRAINT "_EconomicActivitiesToRucConfig_A_fkey" FOREIGN KEY ("A") REFERENCES "EconomicActivities"("id_economic_activities") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EconomicActivitiesToRucConfig" ADD CONSTRAINT "_EconomicActivitiesToRucConfig_B_fkey" FOREIGN KEY ("B") REFERENCES "RucConfig"("id_ruc") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPermissionToUserRole" ADD CONSTRAINT "_UserPermissionToUserRole_A_fkey" FOREIGN KEY ("A") REFERENCES "UserPermission"("id_user_permission") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPermissionToUserRole" ADD CONSTRAINT "_UserPermissionToUserRole_B_fkey" FOREIGN KEY ("B") REFERENCES "UserRole"("id_user_role") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToTypeBusisness" ADD CONSTRAINT "_CompanyToTypeBusisness_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id_company") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToTypeBusisness" ADD CONSTRAINT "_CompanyToTypeBusisness_B_fkey" FOREIGN KEY ("B") REFERENCES "TypeBusisness"("id_type_busisness") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSale" ADD CONSTRAINT "_ProductToSale_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSale" ADD CONSTRAINT "_ProductToSale_B_fkey" FOREIGN KEY ("B") REFERENCES "Sale"("id_sale") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSubCategory" ADD CONSTRAINT "_ProductToSubCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSubCategory" ADD CONSTRAINT "_ProductToSubCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "SubCategory"("id_sub_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProvider" ADD CONSTRAINT "_ProductToProvider_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProvider" ADD CONSTRAINT "_ProductToProvider_B_fkey" FOREIGN KEY ("B") REFERENCES "Provider"("id_provider") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductBaseToSubCategory" ADD CONSTRAINT "_ProductBaseToSubCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductBase"("id_product_base") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductBaseToSubCategory" ADD CONSTRAINT "_ProductBaseToSubCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "SubCategory"("id_sub_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductBaseToProvider" ADD CONSTRAINT "_ProductBaseToProvider_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductBase"("id_product_base") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductBaseToProvider" ADD CONSTRAINT "_ProductBaseToProvider_B_fkey" FOREIGN KEY ("B") REFERENCES "Provider"("id_provider") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProductBase" ADD CONSTRAINT "_CategoryToProductBase_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProductBase" ADD CONSTRAINT "_CategoryToProductBase_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductBase"("id_product_base") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSubCategory" ADD CONSTRAINT "_CategoryToSubCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSubCategory" ADD CONSTRAINT "_CategoryToSubCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "SubCategory"("id_sub_category") ON DELETE CASCADE ON UPDATE CASCADE;
