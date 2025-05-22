import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";

import { Inject, NotFoundException } from "@nestjs/common";

export class DeleteCustomerUseCase {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(id: string): Promise<void> {

    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new NotFoundException('Customer already exists');
    }

    await this.customerRepository.delete(id);

  }
}