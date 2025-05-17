import { Injectable } from "@nestjs/common";
import { Customer } from "src/modules/customer/domain/entities/customer.entity";
import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";
import { PrismaService } from "src/shared/infra/prisma/prisma.service"
import { CreateCustomerDTO } from "../../domain/application/dtos/create-customer.dto";

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Customer[]> {
    const customers = await this.prisma.customers.findMany();

    return customers
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.prisma.customers.findUnique({
      where: { email },
    });

    return customer;
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.prisma.customers.findUnique({
      where: { id },
    });

    return customer;
  }

  async create(customer: CreateCustomerDTO): Promise<Customer> {
    return await this.prisma.customers.create({
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
      },
    });

  }

  async update(id: string, customer: Partial<CreateCustomerDTO>): Promise<Customer> {
    const { email, name, phone } = customer;

    const customerUpdated = await this.prisma.customers.update({
      where: { id },
      data: {
        email, name, phone
      }
    });

    return customerUpdated;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customers.delete({
      where: { id },
    });
  }
}