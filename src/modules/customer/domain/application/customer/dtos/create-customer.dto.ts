import { ApiProperty } from "@nestjs/swagger"

export class CreateCustomerDTO {
  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  phone: string
}
