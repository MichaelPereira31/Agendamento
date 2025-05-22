import { Inject, NotFoundException } from "@nestjs/common";
import { ServiceRepository } from "../../repositories/service.repository";

export class DeleteServiceUseCase {
  constructor(
    @Inject(ServiceRepository)
    private readonly serviceRepository: ServiceRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const service = await this.serviceRepository.findById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    await this.serviceRepository.delete(id);
  }
}