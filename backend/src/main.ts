import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefixe of url
  app.setGlobalPrefix(process.env.APP_PREFIX_URL);

  await app.listen(process.env.APP_PORT, () => {
    config.logInfoStartServer();
  });
}
bootstrap();
