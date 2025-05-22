import { Inject, NotFoundException } from "@nestjs/common";
import { CustomerRepository } from "../../repositories/customer.repository";
import { CreateCustomerDTO } from "../dtos/create-customer.dto";
import { Customer } from "../../entities/customer.entity";
import { UpdateCustomerDTO } from "../dtos/update-customer.dto";

export class UpdateCustomerUseCase{
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ){}

  async execute(id: string, data: UpdateCustomerDTO): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    const customerUpdated = await this.customerRepository.update(id, data);

    return customerUpdated;
  }
}