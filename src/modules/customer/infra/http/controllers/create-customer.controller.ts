import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateCustomerDTO } from "src/modules/customer/domain/application/dtos/create-customer.dto";
import { CreateCustomerUseCase } from "src/modules/customer/domain/application/use-cases/create-customer.use-case";

@ApiTags('Customers')
@Controller('customers')
export class CreateCustomerController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) { }

  @Post()
  @ApiOperation({ summary: "Create a new customer" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 201, description: "Customer created successfully" })
  async create(@Body() data: CreateCustomerDTO) {
    return await this.createCustomerUseCase.execute(data);
  }
}