import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BehaviorSubject, map } from 'rxjs';
import { config } from 'src/config/config';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting)
    private settingModel: Repository<Setting>,
  ) {}

  public setting$ = new BehaviorSubject<Setting>({} as Setting);

  subSetting() {
    return this.setting$;
  }

  async findFirst() {
    const settings = await this.settingModel.find();
    this.setting$.next({ ...settings[0] });
  }

  async create(createSettingDto: CreateSettingDto) {
    const settings = await this.settingModel.find();
    if (settings.length === 0) {
      const setting = await this.settingModel.save(createSettingDto);
      this.setting$.next({ ...setting });
      return { created: true };
    }
    return { created: false };
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    const res = await this.settingModel.update(id, updateSettingDto);
    if (res) {
      const setting = await this.settingModel.findOne({ where: { id: id } });
      this.setting$.next({ ...setting });
      return { updated: true };
    }
    return { updated: false };
  }

  async remove(id: number) {
    const res = await this.settingModel.delete(id);
    if (res) {
      this.setting$.next({} as Setting);
      return { delete: true };
    }
    return { delete: false };
  }
}
