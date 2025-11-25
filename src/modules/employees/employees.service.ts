import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee | null> {
    return this.employeeRepository.findOne({ where: { employeeId: id } });
  }

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create(dto);
    return this.employeeRepository.save(employee);
  }

  async update(id: number, dto: UpdateEmployeeDto): Promise<Employee | null> {
    await this.employeeRepository.update({ employeeId: id }, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete({ employeeId: id });
  }
}
