import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity({ name: 'EMPLOYEES' })
export class Employee {
  @PrimaryGeneratedColumn({ name: 'EMPLOYEE_ID' })
  employeeId: number;

  @Column({ name: 'FULL_NAME', type: 'varchar2', length: 100 })
  fullName: string;

  @Column({ name: 'PHONE', type: 'varchar2', length: 15, nullable: true })
  phone: string;

  @Column({ name: 'POSITION', type: 'varchar2', length: 50, nullable: true })
  position: string;

  @Column({ name: 'SALARY', type: 'number', nullable: true })
  salary: number;

  @Column({ name: 'HIRE_DATE', type: 'date', nullable: true })
  hireDate: Date;

  @OneToMany(() => Order, (order) => order.employee)
  orders: Order[];
}
