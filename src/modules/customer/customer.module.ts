import { Module } from '@nestjs/common';
import { PrismaCustomerRepository } from './infra/prisma/customer.prisma.repository';
import { PrismaModule } from 'src/shared/infra/prisma/prisma.module';
import { CustomerRepository } from './domain/repositories/customer.repository';
import { CreateCustomerUseCase } from './domain/application/use-cases/create-customer.use-case';
import { CreateCustomerController } from './infra/http/controllers/create-customer.controller';
import { FindByIdCustomerController } from './infra/http/controllers/find-by-id-customer.controller';
import { FindByIdCustomerUseCase } from './domain/application/use-cases/find-by-id-customer.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [FindByIdCustomerController, CreateCustomerController],
  providers: [
    FindByIdCustomerUseCase,
    CreateCustomerUseCase,
    {
      provide: CustomerRepository,
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [CustomerRepository],
})

export class CustomerModule {}
