import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";

import { ConflictException, Inject } from "@nestjs/common";
import { Customer } from "../../entities/customer.entity";
import { CreateCustomerDTO } from "../dtos/create-customer.dto";

export class CreateCustomerUseCase {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) { }

  async execute(data: CreateCustomerDTO): Promise<Customer> {

    const customerAlreadyExists = await this.customerRepository.findByEmail(data.email);

    if (customerAlreadyExists) {
      throw new ConflictException('Customer already exists');
    }

    const customer = await this.customerRepository.create(data);

    return customer;

  }
}