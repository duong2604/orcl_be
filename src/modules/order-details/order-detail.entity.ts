import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from '../orders/order.entity';
import { Product } from '../products/product.entity';

@Entity({ name: 'ORDER_DETAILS' })
export class OrderDetail {
  @PrimaryGeneratedColumn({ name: 'ORDER_DETAIL_ID' })
  orderDetailId: number;

  @Column({ name: 'ORDER_ID', type: 'number' })
  orderId: number;

  @Column({ name: 'PRODUCT_ID', type: 'number' })
  productId: number;

  @Column({ name: 'QUANTITY', type: 'number' })
  quantity: number;

  @Column({ name: 'UNIT_PRICE', type: 'number' })
  unitPrice: number;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn({ name: 'ORDER_ID' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderDetails)
  @JoinColumn({ name: 'PRODUCT_ID' })
  product: Product;
}
