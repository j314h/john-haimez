import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  // log
  private logger: Logger = new Logger('Setting Service');

  async findFirst() {
    try {
      this.logger.log('Function findFirst : start');
      const settings = await this.settingModel.find();
      this.logger.log('Function findFirst : end');
      return settings[0];
    } catch (error) {
      this.logger.log('Function findFirst : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async create(createSettingDto: CreateSettingDto) {
    try {
      this.logger.log('Function create : start');
      const res = await this.settingModel.save(createSettingDto);
      if (!res) {
        this.logger.log('Function create : error try');
        throw new Error('Erreur de création');
      }
      const settings = await this.settingModel.find();
      this.logger.log('Function create : end');
      return settings[0];
    } catch (error) {
      this.logger.log('Function create : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    try {
      this.logger.log('Function update : start');
      const res = await this.settingModel.update(id, updateSettingDto);
      if (!res) {
        this.logger.log('Function update : error try');
        throw new Error('Erreur de modification');
      }
      const settings = await this.settingModel.find();
      this.logger.log('Function update : end');
      return settings[0];
    } catch (error) {
      this.logger.log('Function update : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async remove(id: number) {
    try {
      this.logger.log('Function remove : start');
      const res = await this.settingModel.delete(id);
      if (!res) {
        this.logger.log('Function remove : error try');
        throw new Error('Erreur de suppression');
      }
      const settings = await this.settingModel.find();
      if (settings.length === 0) {
        this.logger.log('Function remove : end');
        return null;
      }
    } catch (error) {
      this.logger.log('Function remove : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }
}
