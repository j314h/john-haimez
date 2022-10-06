import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingGateway } from './setting.gateway';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
  constructor(
    private readonly settingService: SettingService,
    private readonly settingGateway: SettingGateway,
  ) {}

  @Get('')
  async findFirst() {
    const setting = await this.settingService.findFirst();
    this.settingGateway.server.emit('settingServer', { ...setting });
  }

  @UseGuards(JwtGuard)
  @Post('')
  async create(@Body() createSettingDto: CreateSettingDto) {
    const setting = await this.settingService.create(createSettingDto);
    this.settingGateway.server.emit('settingServer', { ...setting });
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSettingDto: UpdateSettingDto,
  ) {
    const setting = await this.settingService.update(id, updateSettingDto);
    this.settingGateway.server.emit('settingServer', { ...setting });
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const setting = await this.settingService.remove(id);
    this.settingGateway.server.emit('settingServer', setting);
  }
}
