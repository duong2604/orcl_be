import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer | null> {
    return this.customerRepository.findOne({ where: { customerId: id } });
  }

  async create(dto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(dto);
    return this.customerRepository.save(customer);
  }

  async update(id: number, dto: UpdateCustomerDto): Promise<Customer | null> {
    await this.customerRepository.update({ customerId: id }, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.customerRepository.delete({ customerId: id });
  }
}
