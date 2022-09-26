import { Irole } from './role.model'

/**
 * interface for user
 */
export interface Iuser {
  id?: number
  name?: string
  email?: string
  roleId?: number
  role: Irole
}
