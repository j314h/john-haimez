import { IsString, IsEmail } from 'class-validator';

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
}
