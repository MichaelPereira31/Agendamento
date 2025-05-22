import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/infra/prisma/prisma.module';
import { CreateServiceUseCase } from './domain/application/use-cases/create-service.use-case';
import { DeleteServiceUseCase } from './domain/application/use-cases/delete-service.use-case';
import { FindAllServiceUseCase } from './domain/application/use-cases/find-all-service.use-case';
import { FindByIdServiceUseCase } from './domain/application/use-cases/find-by-id-service.use-case';
import { UpdateServiceUseCase } from './domain/application/use-cases/update-service.use-case';
import { ServiceRepository } from './domain/repositories/service.repository';
import { CreateServiceController } from './infra/http/create-service.controller';
import { DeleteServiceController } from './infra/http/delete-service.controller';
import { FindAllServiceController } from './infra/http/find-all-service.controller';
import { FindByIdServiceController } from './infra/http/find-by-id-service.controller';
import { UpdateServiceController } from './infra/http/update-service.controller';
import { PrismaServiceRepository } from './infra/prisma/service.prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [
    FindAllServiceController,
    FindByIdServiceController,
    CreateServiceController,
    UpdateServiceController,
    DeleteServiceController
  ],
  providers: [
    FindAllServiceUseCase,
    FindByIdServiceUseCase,
    CreateServiceUseCase,
    UpdateServiceUseCase,
    DeleteServiceUseCase,
    {
      provide: ServiceRepository,
      useClass: PrismaServiceRepository,
    },
  ],
  exports: [ServiceRepository],
})

export class ServiceModule {}
