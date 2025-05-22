import { Inject } from "@nestjs/common";
import { ServiceRepository } from "../../repositories/service.repository";
import { Service } from "../../entities/service.entity";

export class FindAllServiceUseCase {
  constructor(
    @Inject(ServiceRepository)
    private readonly serviceRepository: ServiceRepository,
  ) {}

  async execute(): Promise<Service[]> {
    const service = await this.serviceRepository.findAll();

    return service;
  }
}