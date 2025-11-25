import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'oracle',
  host: '192.168.99.129',
  port: 1521,
  username: 'SHOP',
  password: '123456',
  sid: 'ORCL',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
