import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  
  const options = new DocumentBuilder()
  .setTitle('Sharely Api')
  .setDescription('API to store ang get task information')
  .setVersion('1.0')
  .addTag('task-app')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/documentation', app, document);
  
  app.use(bodyParser.json());
  await app.listen(3000);
}
bootstrap();
