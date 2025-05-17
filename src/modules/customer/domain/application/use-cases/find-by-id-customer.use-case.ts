import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";

import { Inject, NotFoundException } from "@nestjs/common";
import { Customer } from "../../entities/customer.entity";

export class FindByIdCustomerUseCase {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(id: string): Promise<Customer> {

    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new NotFoundException('Customer already exists');
    }

    return customer;

  }
}