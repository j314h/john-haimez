import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingGateway } from './setting.gateway';
import { Setting } from './entities/setting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingController } from './setting.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [SettingGateway, SettingService],
  exports: [SettingGateway, SettingService],
  controllers: [SettingController],
})
export class SettingModule {}
