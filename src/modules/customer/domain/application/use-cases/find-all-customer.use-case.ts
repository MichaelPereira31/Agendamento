import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";

import { Inject } from "@nestjs/common";
import { Customer } from "../../entities/customer.entity";

export class FindAllCustomerUseCase {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(): Promise<Customer[]> {

    const customer = await this.customerRepository.findAll();

    return customer;

  }
}