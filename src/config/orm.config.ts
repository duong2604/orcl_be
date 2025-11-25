import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Database config using @nestjs/config
export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'oracle',
    host: process.env.DB_HOST || '192.168.99.129',
    port: parseInt(process.env.DB_PORT || '1521', 10),
    username: process.env.DB_USERNAME || 'SHOP',
    password: process.env.DB_PASSWORD || '123456',
    sid: process.env.DB_SID || 'ORCL',
    connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SID}`,
    autoLoadEntities: true,
    synchronize: false,
    logging: true,
  }),
);
