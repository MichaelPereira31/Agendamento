import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindAllCustomerUseCase } from "src/modules/customer/domain/application/use-cases/find-all-customer.use-case";

@ApiTags('Customers')
@Controller('customers')
export class FindAllCustomerController {
  constructor(private readonly findAllCustomerUseCase: FindAllCustomerUseCase) { }

  @Get()
  @ApiOperation({ summary: "Find a customer by id" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 200, description: "Customer found successfully" })
  async findAll() {
    return await this.findAllCustomerUseCase.execute();
  }
}