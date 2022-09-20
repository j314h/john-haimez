import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * dto for update user
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  name?: string;
  email?: string;
}
