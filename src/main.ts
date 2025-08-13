import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors();
  
  // Configurar prefixo global para as APIs
  app.setGlobalPrefix('api');
  
  const port = 3001;
  await app.listen(port);
  
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Frontend: http://localhost:${port}`);
  console.log(`API: http://localhost:${port}/api`);
}

bootstrap();
