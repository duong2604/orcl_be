import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/orm.config';
import { EmployeesModule } from './modules/employees/employees.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderDetailsModule } from './modules/order-details/order-details.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    EmployeesModule,
    CustomersModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    OrderDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
