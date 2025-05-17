import { Injectable } from "@nestjs/common";
import { Customer } from "src/modules/customer/domain/entities/customer.entity";
import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";
import { PrismaService } from "src/shared/infra/prisma/prisma.service"

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Customer[]> {
    const customers = await this.prisma.customers.findMany();

    return customers
  }
  async findById(id: string): Promise<Customer> {
    const customer = await this.prisma.customers.findUnique({
      where: { id },
    });

    if (!customer) {
      throw new Error('Customer not found');
    }

    return customer;

  }

  async create(customer: Customer): Promise<void> {
    await this.prisma.customers.create({
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
      },
    });

  }

  async update(id: string, customer: Partial<Customer>): Promise<void> {
    const { email, name, phone } = customer;

    await this.prisma.customers.update({
      where: { id },
      data: {
        email, name, phone
      }
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customers.delete({
      where: { id },
    });
  }
}