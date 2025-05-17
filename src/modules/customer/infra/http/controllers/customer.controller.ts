import { Body, Controller, Post } from "@nestjs/common";
import { CreateCustomerUseCase } from "src/modules/customer/domain/application/customer/use-cases/create-customer.use-case";
import { CreateCustomerDto } from "../validators/create-customer.zod";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateCustomerDTO } from "src/modules/customer/domain/application/customer/dtos/create-customer.dto";

@ApiTags('Customers')
@Controller('customers')
export class CustomerController{
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase){}

  @Post()
  @ApiOperation({summary: "Create a new customer"})
  @ApiResponse({status: 403, description: "Forbidden."})
  @ApiResponse({status: 201, description: "Customer created successfully"})
  async create(@Body() data: CreateCustomerDTO){
    return await this.createCustomerUseCase.execute(data);
  }
}