import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindByIdServiceUseCase } from "../../domain/application/use-cases/find-by-id-service.use-case";

@ApiTags('Services')
@Controller('services')
export class FindByIdServiceController {
  constructor(private readonly findByIdServiceUseCase: FindByIdServiceUseCase) {}

  @Get(':id')
  @ApiOperation({ summary: "Find by id service" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal a service" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Success" })
  async findById(@Param('id') id: string) {
    return await this.findByIdServiceUseCase.execute(id);
  }
}