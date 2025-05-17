import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";
import { CreateCustomerDTO } from "../dtos/create-customer.dto";
import { Customer } from "../../../entities/customer.entity";
import { Inject } from "@nestjs/common";

export class CreateCustomerUseCase {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(data: CreateCustomerDTO): Promise<void> {
    const customer = Customer.create(data);

    await this.customerRepository.create(customer);
  }
}