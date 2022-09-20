import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { config } from './config/config';

@Module({
  imports: [
    // define conf .env
    ConfigModule.forRoot({
      envFilePath: config.selectPathEnv(process.env.ENVIRONMENT),
      isGlobal: true,
    }),

    // orm
    TypeOrmModule.forRoot(config.database()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
