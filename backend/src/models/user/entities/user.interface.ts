import { Role } from 'src/models/role/entities/role.entity';

/**
 * interface of model user
 */
export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  roleId?: number;
  role?: Role;
}
