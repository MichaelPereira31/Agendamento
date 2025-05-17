import { CustomerRepository } from "src/modules/customer/domain/repositories/customer.repository";
import { CreateCustomerDTO } from "../dtos/create-customer.dto";
import { Customer } from "../../../entities/customer.entity";
import { ConflictException, Inject } from "@nestjs/common";

export class CreateCustomerUseCase {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute(data: CreateCustomerDTO): Promise<Customer> {

    const customerAlreadyExists = await this.customerRepository.findByEmail(data.email);
    
    if (customerAlreadyExists) {
      throw new ConflictException('Customer already exists');
    }

    const customer =  await this.customerRepository.create(data);

    return customer;
  
  }
}