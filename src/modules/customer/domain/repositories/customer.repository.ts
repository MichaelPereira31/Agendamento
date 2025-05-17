import { CreateCustomerDTO } from "../application/dtos/create-customer.dto";
import { Customer } from "../entities/customer.entity";

export abstract class CustomerRepository {
  abstract create(customer: CreateCustomerDTO): Promise<Customer>;
  abstract findAll(): Promise<Customer[]>;
  abstract findByEmail(email: string): Promise<Customer | null>;
  abstract findById(id: string): Promise<Customer | null>;
  abstract update(id: string, customer: Partial<CreateCustomerDTO>): Promise<Customer>;
  abstract delete(id: string): Promise<void>;
}
