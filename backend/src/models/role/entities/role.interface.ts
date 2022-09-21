import { User } from 'src/models/user/entities/user.entity';

export interface IRole {
  id?: string;
  libelle?: string;
  users?: User[];
}
