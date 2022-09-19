import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeormConfig } from './services/data/typeorm-config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
