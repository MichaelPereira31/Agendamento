import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { env } from './shared/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.useLogger(logger);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Agendamentos')
    .setDescription('Plataforma de Agendamento e Notificações com Integração ao Google Drive')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  
  await app.listen(env.PORT).then(async () => {
    logger.log(`Application is running on: ${(await app.getUrl())}`);
    logger.log(`Swagger is running on: ${await app.getUrl()}/api`);
  });
}
bootstrap();
