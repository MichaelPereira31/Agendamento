import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ServiceModule } from './modules/service/service.module';

@Module({
  imports: [CustomerModule, ServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
