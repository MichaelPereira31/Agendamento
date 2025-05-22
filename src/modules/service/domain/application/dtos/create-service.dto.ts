import { ApiProperty } from "@nestjs/swagger"

export class CreateServiceDTO {
  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  price: number

  @ApiProperty()
  durationMinutes: number 
}
