import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsString()
  libelle: string;
}
