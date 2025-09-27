import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ApiKeyGuard } from './app/guards/api-key.guard';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply API key guard globally
  // Enable CORS
  app.enableCors();

  app.useGlobalGuards(new ApiKeyGuard());

  await app.listen(3000);
  console.log('API Gateway running on http://localhost:3000');
}
bootstrap();
