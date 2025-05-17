import { Module } from '@nestjs/common';
import { CustomerController } from './infra/http/controllers/customer.controller';
import { PrismaCustomerRepository } from './infra/prisma/customer.prisma.repository';
import { CreateCustomerUseCase } from './domain/application/customer/use-cases/create-customer.use-case';
import { PrismaModule } from 'src/shared/infra/prisma/prisma.module';
import { CustomerRepository } from './domain/repositories/customer.repository';

@Module({
  imports: [PrismaModule],
  controllers: [CustomerController],
  providers: [
    CreateCustomerUseCase,
    {
      provide: CustomerRepository,
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [CustomerRepository],
})

export class CustomerModule {}
