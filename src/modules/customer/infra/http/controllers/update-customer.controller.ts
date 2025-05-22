import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateCustomerDTO } from "src/modules/customer/domain/application/dtos/update-customer.dto";
import { UpdateCustomerUseCase } from "src/modules/customer/domain/application/use-cases/update-customer.use-case";

@ApiTags('Customers')
@Controller('customers')
export class UpdateCustomerController {
  constructor(private readonly updateCustomerUseCase: UpdateCustomerUseCase) { }

  @Put(':id')
  @ApiOperation({ summary: "Update a customer" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 201, description: "Customer updated successfully" })
  async update(@Param('id') id: string, @Body() data: UpdateCustomerDTO) {
    return await this.updateCustomerUseCase.execute(id, data);
  }
}