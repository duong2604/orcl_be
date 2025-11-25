import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { productId: id },
      relations: ['category'],
    });
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(dto);
    return this.productRepository.save(product);
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product | null> {
    await this.productRepository.update({ productId: id }, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete({ productId: id });
  }
}
