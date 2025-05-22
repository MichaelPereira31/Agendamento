import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateServiceDTO } from "../../domain/application/dtos/create-service.dto";
import { UpdateServiceUseCase } from "../../domain/application/use-cases/update-service.use-case";

@ApiTags('Services')
@Controller('services')
export class UpdateServiceController {
  constructor(private readonly updateServiceUseCase: UpdateServiceUseCase) {}

  @Put(':id')
  @ApiOperation({ summary: "Update a service" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Service updated successfully" })
  async update(@Param('id') id: string, @Body() data: CreateServiceDTO) {
    return await this.updateServiceUseCase.execute(id, data);
  }
}