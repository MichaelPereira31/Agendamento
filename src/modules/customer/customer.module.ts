import { Module } from '@nestjs/common';
import { PrismaCustomerRepository } from './infra/prisma/customer.prisma.repository';
import { PrismaModule } from 'src/shared/infra/prisma/prisma.module';
import { CustomerRepository } from './domain/repositories/customer.repository';
import { CreateCustomerUseCase } from './domain/application/use-cases/create-customer.use-case';
import { CreateCustomerController } from './infra/http/controllers/create-customer.controller';
import { FindByIdCustomerController } from './infra/http/controllers/find-by-id-customer.controller';
import { FindByIdCustomerUseCase } from './domain/application/use-cases/find-by-id-customer.use-case';
import { UpdateCustomerUseCase } from './domain/application/use-cases/update-customer.use-case';
import { DeleteCustomerUseCase } from './domain/application/use-cases/delete-customer.use-case';
import { UpdateCustomerController } from './infra/http/controllers/update-customer.controller';
import { DeleteCustomerController } from './infra/http/controllers/delete-customer.controller';
import { FindAllCustomerController } from './infra/http/controllers/find-all-customer.controller';
import { FindAllCustomerUseCase } from './domain/application/use-cases/find-all-customer.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [
    FindAllCustomerController,
    FindByIdCustomerController,
    CreateCustomerController,
    UpdateCustomerController,
    DeleteCustomerController
  ],
  providers: [
    FindAllCustomerUseCase,
    FindByIdCustomerUseCase,
    CreateCustomerUseCase,
    UpdateCustomerUseCase,
    DeleteCustomerUseCase,
    {
      provide: CustomerRepository,
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [CustomerRepository],
})

export class CustomerModule {}
