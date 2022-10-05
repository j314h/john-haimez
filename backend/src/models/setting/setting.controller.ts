import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
  MessageEvent,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { BehaviorSubject, interval, map, Observable } from 'rxjs';
import { Setting } from './entities/setting.entity';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  // SSE
  @Sse('first/sse')
  findFirstSse(): Observable<MessageEvent> {
    return this.settingService
      .subSetting()
      .pipe(map((value) => ({ data: { ...value } } as MessageEvent)));
  }

  @Get('first')
  findFirst() {
    this.settingService.findFirst();
  }

  @Post()
  create(@Body() createSettingDto: CreateSettingDto) {
    return this.settingService.create(createSettingDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSettingDto: UpdateSettingDto) {
    this.settingService.update(id, updateSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.settingService.remove(id);
  }
}
