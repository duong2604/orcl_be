import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Customer } from '../customers/customer.entity';
import { Employee } from '../employees/employee.entity';
import { OrderDetail } from '../order-details/order-detail.entity';

@Entity({ name: 'ORDERS' })
export class Order {
  @PrimaryGeneratedColumn({ name: 'ORDER_ID' })
  orderId: number;

  @Column({ name: 'ORDER_DATE', type: 'date' })
  orderDate: Date;

  @Column({ name: 'CUSTOMER_ID', type: 'number' })
  customerId: number;

  @Column({ name: 'EMPLOYEE_ID', type: 'number' })
  employeeId: number;

  @Column({ name: 'TOTAL_AMOUNT', type: 'number' })
  totalAmount: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'CUSTOMER_ID' })
  customer: Customer;

  @ManyToOne(() => Employee, (employee) => employee.orders)
  @JoinColumn({ name: 'EMPLOYEE_ID' })
  employee: Employee;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];
}
