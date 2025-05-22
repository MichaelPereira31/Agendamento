import { Inject } from "@nestjs/common";
import { ServiceRepository } from "../../repositories/service.repository";
import { CreateServiceDTO } from "../dtos/create-service.dto";
import { Service } from "../../entities/service.entity";

export class CreateServiceUseCase {
  constructor(
    @Inject(ServiceRepository)
    private readonly serviceRepository: ServiceRepository,
  ) {}

  async execute(data: CreateServiceDTO): Promise<Service> {

    const service = await this.serviceRepository.create(data);

    return service;
  }
}