import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateSettingDto } from './create-setting.dto';

export class UpdateSettingDto extends PartialType(CreateSettingDto) {
  id?: number;

  @IsString()
  copyright: string;
}
