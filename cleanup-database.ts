import AppDataSource from './typeorm.config';

async function cleanup() {
  const dataSource = AppDataSource;

  try {
    await dataSource.initialize();
    console.log('✅ Connected to database');

    const queries = [
      // Drop Foreign Keys
      `BEGIN EXECUTE IMMEDIATE 'ALTER TABLE PRODUCTS DROP CONSTRAINT FK_PRODUCTS_CATEGORIES'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'ALTER TABLE ORDER_DETAILS DROP CONSTRAINT FK_ORDER_DETAILS_PRODUCTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'ALTER TABLE ORDER_DETAILS DROP CONSTRAINT FK_ORDER_DETAILS_ORDERS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'ALTER TABLE ORDERS DROP CONSTRAINT FK_ORDERS_EMPLOYEES'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'ALTER TABLE ORDERS DROP CONSTRAINT FK_ORDERS_CUSTOMERS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,

      // Drop tables
      `BEGIN EXECUTE IMMEDIATE 'DROP TABLE ORDER_DETAILS CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'DROP TABLE ORDERS CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'DROP TABLE PRODUCTS CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'DROP TABLE CATEGORIES CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'DROP TABLE EMPLOYEES CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,
      `BEGIN EXECUTE IMMEDIATE 'DROP TABLE CUSTOMERS CASCADE CONSTRAINTS'; EXCEPTION WHEN OTHERS THEN NULL; END;`,

      // Delete migration records (keep only the first one)
      `DELETE FROM migrations WHERE name IN ('UpdateProductsTable1764064788359', 'CreateAllTables1764065698629')`,
      `COMMIT`,
    ];

    for (const query of queries) {
      try {
        await dataSource.query(query);
        console.log('✅ Executed:', query.substring(0, 50) + '...');
      } catch (error) {
        console.log('⚠️ Warning:', error.message);
      }
    }

    // Show remaining tables
    const tables = await dataSource.query(
      `SELECT table_name FROM user_tables ORDER BY table_name`,
    );
    console.log('\n📋 Remaining tables:', tables);

    console.log('\n✅ Cleanup completed successfully!');
    console.log('Now run: yarn migration:run');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await dataSource.destroy();
  }
}

cleanup();
