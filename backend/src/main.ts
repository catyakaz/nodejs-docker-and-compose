import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://api.kupipodaridaynestjs.nomorepartiesco.ru',
      'https://kupipodaridaynestjs.nomorepartiesco.ru/',
      'https://kupipodaridaynestjs.nomorepartiesco.ru',
      'http://localhost:3001',
      'http://example.com',
      'http://www.example.com',
      'http://app.example.com',
      'https://example.com',
      'https://www.example.com',
      'https://app.example.com',
    ],
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
