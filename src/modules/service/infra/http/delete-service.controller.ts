import { Controller, Delete, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DeleteServiceUseCase } from "../../domain/application/use-cases/delete-service.use-case";

@ApiTags('Services')
@Controller('services')
export class DeleteServiceController {
  constructor(private readonly deleteServiceUseCase: DeleteServiceUseCase) {}

  @Delete(':id')
  @ApiOperation({ summary: "Delete a service" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal a service" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Service deleted successfully" })
  async findById(@Param('id') id: string) {
    return await this.deleteServiceUseCase.execute(id);
  }
}