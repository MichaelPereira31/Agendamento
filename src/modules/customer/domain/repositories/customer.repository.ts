import { Customer } from "../entities/customer.entity";

export abstract class CustomerRepository {
  abstract create(customer: Customer): Promise<void>;
  abstract findAll(): Promise<Customer[]>;
  abstract findById(id: string): Promise<Customer | null>;
  abstract update(id: string, customer: Partial<Customer>): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
