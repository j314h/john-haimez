import { IsString, IsEmail } from 'class-validator';
/**
 * dto for update user
 */
export class UserUpdateDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;
}
