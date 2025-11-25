import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default new DataSource({
  type: 'oracle',
  host: process.env.DB_HOST || '192.168.99.129',
  port: parseInt(process.env.DB_PORT || '1521', 10),
  username: process.env.DB_USERNAME || 'SHOP',
  password: process.env.DB_PASSWORD || '123456',
  sid: process.env.DB_SID || 'ORCL',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
