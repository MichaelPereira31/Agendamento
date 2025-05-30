import { Inject, NotFoundException } from "@nestjs/common";
import { ServiceRepository } from "../../repositories/service.repository";
import { Service } from "../../entities/service.entity";
import { UpdateServiceDTO } from "../dtos/update-service.dto";

export class UpdateServiceUseCase {
  constructor(
    @Inject(ServiceRepository)
    private readonly serviceRepository: ServiceRepository,
  ) {}

  async execute(id: string, data: UpdateServiceDTO): Promise<Service> {
    const service = await this.serviceRepository.findById(id);
    
    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const serviceUpdated = await this.serviceRepository.update(id, data);

    return serviceUpdated;
  }
}