import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindAllServiceUseCase } from "../../domain/application/use-cases/find-all-service.use-case";

@ApiTags('Services')
@Controller('services')
export class FindAllServiceController {
  constructor(private readonly findAllServiceUseCase: FindAllServiceUseCase) {}

  @Get()
  @ApiOperation({ summary: "Find all services" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal a service" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Find all services" })
  async findAll() {
    return await this.findAllServiceUseCase.execute();
  }
}