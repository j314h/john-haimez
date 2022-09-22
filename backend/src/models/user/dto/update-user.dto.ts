import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsNumber } from 'class-validator';
import { Role } from 'src/models/role/entities/role.entity';
import { Auth } from 'src/models/auth/entities/auth.entity';

/**
 * dto for update user
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsNumber()
  roleId?: number;

  role?: Role;

  auth?: Auth;
}
