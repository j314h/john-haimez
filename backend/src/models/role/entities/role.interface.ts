import { User } from 'src/models/user/entities/user.entity';

/**
 * role for Role entity
 */
export interface IRole {
  id?: string;
  libelle?: string;
  users?: User[];
}

/**
 * enum of role
 */
export enum ERole {
  ROOT = 'root',
  ADMIN = 'admin',
  AUTH = 'auth',
  PUBLIC = 'public',
}
