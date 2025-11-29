import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedData1764067000000 implements MigrationInterface {
  name = 'SeedData1764067000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Seed Categories
    await queryRunner.query(
      `INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Electronics', 'Electronic devices and gadgets')`,
    );
    await queryRunner.query(
      `INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Clothing', 'Fashion and apparel items')`,
    );
    await queryRunner.query(
      `INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Food & Beverages', 'Food and drink products')`,
    );
    await queryRunner.query(
      `INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Books', 'Books and educational materials')`,
    );
    await queryRunner.query(
      `INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Sports & Outdoors', 'Sports equipment and outdoor gear')`,
    );
    await queryRunner.query(
      `INSERT INTO CATEGORIES (CATEGORY_NAME, DESCRIPTION) VALUES ('Home & Kitchen', 'Home decor and kitchen appliances')`,
    );

    // Seed Products - Electronics (Category ID: 1)
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('iPhone 15 Pro', 999.99, 50, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Samsung Galaxy S24', 899.99, 45, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('MacBook Pro 16"', 2499.99, 30, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Sony WH-1000XM5 Headphones', 349.99, 100, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('iPad Air', 599.99, 60, 1)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Dell XPS 15', 1799.99, 25, 1)`,
    );

    // Seed Products - Clothing (Category ID: 2)
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Nike Air Max Sneakers', 129.99, 150, 2)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Levi''s 501 Jeans', 69.99, 200, 2)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Adidas Hoodie', 54.99, 180, 2)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Polo Ralph Lauren Shirt', 89.99, 120, 2)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('North Face Jacket', 199.99, 75, 2)`,
    );

    // Seed Products - Food & Beverages (Category ID: 3)
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Organic Coffee Beans 1kg', 24.99, 300, 3)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Premium Green Tea Box', 15.99, 250, 3)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Dark Chocolate Bar Pack', 12.99, 400, 3)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Almond Milk 1L', 4.99, 500, 3)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Energy Drink Pack (12)', 29.99, 200, 3)`,
    );

    // Seed Products - Books (Category ID: 4)
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Clean Code - Robert Martin', 49.99, 85, 4)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('The Pragmatic Programmer', 44.99, 90, 4)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Design Patterns', 54.99, 70, 4)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('JavaScript: The Good Parts', 29.99, 100, 4)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Atomic Habits', 24.99, 150, 4)`,
    );

    // Seed Products - Sports & Outdoors (Category ID: 5)
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Yoga Mat Premium', 39.99, 120, 5)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Dumbbells Set 20kg', 89.99, 60, 5)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Camping Tent 4-Person', 159.99, 40, 5)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Mountain Bike', 599.99, 25, 5)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Running Shoes', 119.99, 140, 5)`,
    );

    // Seed Products - Home & Kitchen (Category ID: 6)
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Coffee Maker Machine', 79.99, 90, 6)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Blender Pro 1000W', 99.99, 75, 6)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Air Fryer 5L', 129.99, 100, 6)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Vacuum Cleaner Robot', 299.99, 50, 6)`,
    );
    await queryRunner.query(
      `INSERT INTO PRODUCTS (PRODUCT_NAME, PRICE, QUANTITY, CATEGORY_ID) 
       VALUES ('Kitchen Knife Set', 149.99, 80, 6)`,
    );

    // Seed Customers
    await queryRunner.query(
      `INSERT INTO CUSTOMERS (FULL_NAME, PHONE, EMAIL, ADDRESS) 
       VALUES ('John Doe', '0901234567', 'john.doe@email.com', '123 Main St, Hanoi')`,
    );
    await queryRunner.query(
      `INSERT INTO CUSTOMERS (FULL_NAME, PHONE, EMAIL, ADDRESS) 
       VALUES ('Jane Smith', '0902345678', 'jane.smith@email.com', '456 Oak Ave, Ho Chi Minh')`,
    );
    await queryRunner.query(
      `INSERT INTO CUSTOMERS (FULL_NAME, PHONE, EMAIL, ADDRESS) 
       VALUES ('Mike Johnson', '0903456789', 'mike.johnson@email.com', '789 Pine Rd, Da Nang')`,
    );
    await queryRunner.query(
      `INSERT INTO CUSTOMERS (FULL_NAME, PHONE, EMAIL, ADDRESS) 
       VALUES ('Emily Brown', '0904567890', 'emily.brown@email.com', '321 Elm St, Hue')`,
    );
    await queryRunner.query(
      `INSERT INTO CUSTOMERS (FULL_NAME, PHONE, EMAIL, ADDRESS) 
       VALUES ('David Wilson', '0905678901', 'david.wilson@email.com', '654 Maple Dr, Can Tho')`,
    );

    // Seed Employees
    await queryRunner.query(
      `INSERT INTO EMPLOYEES (FULL_NAME, PHONE, POSITION, SALARY, HIRE_DATE) 
       VALUES ('Alice Manager', '0911111111', 'Store Manager', 50000, TO_DATE('2020-01-15', 'YYYY-MM-DD'))`,
    );
    await queryRunner.query(
      `INSERT INTO EMPLOYEES (FULL_NAME, PHONE, POSITION, SALARY, HIRE_DATE) 
       VALUES ('Bob Supervisor', '0922222222', 'Sales Supervisor', 35000, TO_DATE('2021-03-20', 'YYYY-MM-DD'))`,
    );
    await queryRunner.query(
      `INSERT INTO EMPLOYEES (FULL_NAME, PHONE, POSITION, SALARY, HIRE_DATE) 
       VALUES ('Carol Assistant', '0933333333', 'Sales Assistant', 25000, TO_DATE('2022-06-10', 'YYYY-MM-DD'))`,
    );
    await queryRunner.query(
      `INSERT INTO EMPLOYEES (FULL_NAME, PHONE, POSITION, SALARY, HIRE_DATE) 
       VALUES ('Dan Clerk', '0944444444', 'Clerk', 20000, TO_DATE('2023-02-01', 'YYYY-MM-DD'))`,
    );
    await queryRunner.query(
      `INSERT INTO EMPLOYEES (FULL_NAME, PHONE, POSITION, SALARY, HIRE_DATE) 
       VALUES ('Eve Technician', '0955555555', 'Technician', 30000, TO_DATE('2021-09-15', 'YYYY-MM-DD'))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Delete in reverse order to respect foreign key constraints
    await queryRunner.query(`DELETE FROM ORDER_DETAILS`);
    await queryRunner.query(`DELETE FROM ORDERS`);
    await queryRunner.query(`DELETE FROM EMPLOYEES`);
    await queryRunner.query(`DELETE FROM CUSTOMERS`);
    await queryRunner.query(`DELETE FROM PRODUCTS`);
    await queryRunner.query(`DELETE FROM CATEGORIES`);
  }
}
