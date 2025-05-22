import { Controller, Delete, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DeleteCustomerUseCase } from "src/modules/customer/domain/application/use-cases/delete-customer.use-case";

@ApiTags('Customers')
@Controller('customers')
export class DeleteCustomerController {
  constructor(private readonly deleteCustomerUseCase: DeleteCustomerUseCase) { }

  @Delete(':id')
  @ApiOperation({ summary: "Delete a customer by id" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Deleted successfully" })
  async delete(@Param('id') id: string) {
    return await this.deleteCustomerUseCase.execute(id);
  }
}