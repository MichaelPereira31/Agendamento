import { Inject, NotFoundException } from "@nestjs/common";
import { ServiceRepository } from "../../repositories/service.repository";
import { Service } from "../../entities/service.entity";

export class FindByIdServiceUseCase {
  constructor(
    @Inject(ServiceRepository)
    private readonly serviceRepository: ServiceRepository,
  ) {}

  async execute(id: string): Promise<Service> {
    const service = await this.serviceRepository.findById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }
}