import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Category } from '../categories/category.entity';
import { OrderDetail } from '../order-details/order-detail.entity';

@Entity({ name: 'PRODUCTS' })
export class Product {
  @PrimaryGeneratedColumn({ name: 'PRODUCT_ID' })
  productId: number;

  @Column({ name: 'PRODUCT_NAME', type: 'varchar2', length: 100 })
  productName: string;

  @Column({ name: 'PRICE', type: 'number' })
  price: number;

  @Column({ name: 'QUANTITY', type: 'number' })
  quantity: number;

  @Column({ name: 'CATEGORY_ID', type: 'number' })
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'CATEGORY_ID' })
  category: Category;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetails: OrderDetail[];
}
