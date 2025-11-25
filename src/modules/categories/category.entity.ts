import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity({ name: 'CATEGORIES' })
export class Category {
  @PrimaryGeneratedColumn({ name: 'CATEGORY_ID' })
  categoryId: number;

  @Column({ name: 'CATEGORY_NAME', type: 'varchar2', length: 100 })
  categoryName: string;

  @Column({
    name: 'DESCRIPTION',
    type: 'varchar2',
    length: 200,
    nullable: true,
  })
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
