import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindByIdCustomerUseCase } from "src/modules/customer/domain/application/use-cases/find-by-id-customer.use-case";

@ApiTags('Customers')
@Controller('customers')
export class FindByIdCustomerController {
  constructor(private readonly findByIdCustomerUseCase: FindByIdCustomerUseCase) { }

  @Get(':id')
  @ApiOperation({ summary: "Find a customer by id" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Customer found successfully" })
  async findById(@Param('id') id: string) {
    return await this.findByIdCustomerUseCase.execute(id);
  }
}