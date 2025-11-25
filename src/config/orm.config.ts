import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: '192.168.99.129',
  port: 1521,
  username: 'SHOP',
  password: '123456',
  sid: 'ORCL',
  autoLoadEntities: true,
  synchronize: false, // Tắt để dùng migration
};

export default ormConfig;
