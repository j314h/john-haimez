import { IsString, IsEmail, IsNumber } from 'class-validator';
import { Role } from 'src/models/role/entities/role.entity';
import { Auth } from 'src/models/auth/entities/auth.entity';

/**
 * dto for update user
 */
export class UserPasswordUpdateDto {
  @IsString()
  password?: string;

  @IsString()
  newPassword?: string;

  @IsString()
  confirmNewPassword?: string;
}
