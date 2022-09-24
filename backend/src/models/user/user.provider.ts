import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserProvider {
  constructor(private roleService: RoleService) {}

  /**
   * create hash
   * @param password string
   * @returns hash
   */
  async hash(password: string) {
    // create salt
    const salt = await bcrypt.genSalt();
    // hash password
    return await bcrypt.hash(password, salt);
  }

  /**
   * if role id exist or role libelle get role, else get role public
   * @param idRole number
   * @returns role
   */
  async getRoleForUser(idRole: number | null, role: string | null = null) {
    if (idRole || role) {
      if (idRole) {
        return await this.roleService.findOne(idRole);
      } else {
        return await this.roleService.findByLibelle(role);
      }
    } else {
      return await this.roleService.findByLibelle('public');
    }
  }
}
