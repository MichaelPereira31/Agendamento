import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateServiceUseCase } from "../../domain/application/use-cases/create-service.use-case";
import { CreateServiceDTO } from "../../domain/application/dtos/create-service.dto";

@ApiTags('Services')
@Controller('services')
export class CreateServiceController {
  constructor(private readonly createServiceUseCase: CreateServiceUseCase) {}

  @Post()
  @ApiOperation({ summary: "Create a new service" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 201, description: "Service created successfully" })
  async create(@Body() data: CreateServiceDTO) {
    return await this.createServiceUseCase.execute(data);
  }
}