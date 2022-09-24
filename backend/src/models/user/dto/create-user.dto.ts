import { IsString, IsEmail, IsNumber } from 'class-validator';
import { Role } from 'src/models/role/entities/role.entity';

/**
 * Dto for create user
 */
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  roleId: number;

  role?: Role;
}
