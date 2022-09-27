import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefixe of url
  app.setGlobalPrefix(process.env.APP_PREFIX_URL);

  // cors
  app.enableCors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  });

  await app.listen(process.env.APP_PORT, () => {
    config.logInfoStartServer();
  });
}
bootstrap();
