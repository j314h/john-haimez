import { IsString } from 'class-validator';

export class CreateSettingDto {
  id?: number;

  @IsString()
  copyright: string;
}
