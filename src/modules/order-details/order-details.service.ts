import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetail } from './order-detail.entity';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
  ) {}

  async findAll(): Promise<OrderDetail[]> {
    return this.orderDetailRepository.find({
      relations: ['order', 'product'],
    });
  }

  async findOne(id: number): Promise<OrderDetail | null> {
    return this.orderDetailRepository.findOne({
      where: { orderDetailId: id },
      relations: ['order', 'product'],
    });
  }

  async create(dto: CreateOrderDetailDto): Promise<OrderDetail> {
    const orderDetail = this.orderDetailRepository.create(dto);
    return this.orderDetailRepository.save(orderDetail);
  }

  async update(
    id: number,
    dto: UpdateOrderDetailDto,
  ): Promise<OrderDetail | null> {
    await this.orderDetailRepository.update({ orderDetailId: id }, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.orderDetailRepository.delete({ orderDetailId: id });
  }
}
