import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNotificationTable1682001688292 implements MigrationInterface {
    name = 'AddNotificationTable1682001688292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notification" ("id_notification" character varying NOT NULL, "title" text, "content" text, "slug" text, "read" boolean NOT NULL DEFAULT false, "is_delete" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id_user" character varying, "user_client_id_user_client" character varying, CONSTRAINT "PK_5eeade67aa70b7db4a6bdd4dcd8" PRIMARY KEY ("id_notification"))`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_3c7a8f4bd8290c7897ad9aa80f7" FOREIGN KEY ("user_id_user") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_74fcb713053519dc57ca0e985b1" FOREIGN KEY ("user_client_id_user_client") REFERENCES "user_client"("id_user_client") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_74fcb713053519dc57ca0e985b1"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_3c7a8f4bd8290c7897ad9aa80f7"`);
        await queryRunner.query(`DROP TABLE "notification"`);
    }

}
