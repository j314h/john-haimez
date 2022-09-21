import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail } from 'class-validator';

/**
 * dto for update user
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;
}
