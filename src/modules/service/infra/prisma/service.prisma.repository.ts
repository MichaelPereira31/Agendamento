import { PrismaService } from "src/shared/infra/prisma/prisma.service";
import { ServiceRepository } from "../../domain/repositories/service.repository";
import { Injectable } from "@nestjs/common";
import { CreateServiceDTO } from "../../domain/application/dtos/create-service.dto";
import { Service } from "../../domain/entities/service.entity";

@Injectable()
export class PrismaServiceRepository implements ServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(service: CreateServiceDTO): Promise<Service> {
    const createdService = await this.prisma.services.create({
      data: service,
    });
    return createdService;
  }

  async findAll(): Promise<Service[]> {
    const services = await this.prisma.services.findMany();
    return services;
  }

  async findById(id: string): Promise<Service | null> {
    const service = await this.prisma.services.findUnique({
      where: { id },
    });
    return service;
  }

  async update(id: string, service: Partial<CreateServiceDTO>): Promise<Service> {
    const updatedService = await this.prisma.services.update({
      where: { id },
      data: service,
    });
    return updatedService;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.services.delete({
      where: { id },
    });
  }
}