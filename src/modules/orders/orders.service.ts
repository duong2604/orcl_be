import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['customer', 'employee', 'orderDetails'],
    });
  }

  async findOne(id: number): Promise<Order | null> {
    return this.orderRepository.findOne({
      where: { orderId: id },
      relations: ['customer', 'employee', 'orderDetails'],
    });
  }

  async create(dto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create(dto);
    return this.orderRepository.save(order);
  }

  async update(id: number, dto: UpdateOrderDto): Promise<Order | null> {
    await this.orderRepository.update({ orderId: id }, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.delete({ orderId: id });
  }
}
