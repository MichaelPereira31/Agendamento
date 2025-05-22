import { CreateServiceDTO } from "../application/dtos/create-service.dto";
import { Service } from "../entities/service.entity";

export abstract class ServiceRepository {
  abstract create(service: CreateServiceDTO): Promise<Service>;
  abstract findAll(): Promise<Service[]>;
  abstract findById(id: string): Promise<Service | null>;
  abstract update(id: string, service: Partial<CreateServiceDTO>): Promise<Service>;
  abstract delete(id: string): Promise<void>;
}