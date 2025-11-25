import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateProductsTable1764064788359 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE PRODUCTS ADD DESCRIPTION VARCHAR2(500)`,
    );
    await queryRunner.query(
      `ALTER TABLE PRODUCTS ADD QUANTITY NUMBER DEFAULT 0 NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE PRODUCTS ADD CATEGORY VARCHAR2(50)`);
    await queryRunner.query(
      `ALTER TABLE PRODUCTS ADD CREATEDAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE PRODUCTS DROP COLUMN CREATEDAT`);
    await queryRunner.query(`ALTER TABLE PRODUCTS DROP COLUMN CATEGORY`);
    await queryRunner.query(`ALTER TABLE PRODUCTS DROP COLUMN QUANTITY`);
    await queryRunner.query(`ALTER TABLE PRODUCTS DROP COLUMN DESCRIPTION`);
  }
}
