import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity({ name: 'CUSTOMERS' })
export class Customer {
  @PrimaryGeneratedColumn({ name: 'CUSTOMER_ID' })
  customerId: number;

  @Column({ name: 'FULL_NAME', type: 'varchar2', length: 100 })
  fullName: string;

  @Column({ name: 'PHONE', type: 'varchar2', length: 15, nullable: true })
  phone: string;

  @Column({ name: 'EMAIL', type: 'varchar2', length: 100, nullable: true })
  email: string;

  @Column({ name: 'ADDRESS', type: 'varchar2', length: 200, nullable: true })
  address: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
