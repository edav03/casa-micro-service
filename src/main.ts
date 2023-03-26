import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  let app: INestApplication;

  app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ caseSensitive: false }),
    {},
  );

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
