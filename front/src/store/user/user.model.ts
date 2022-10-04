import { Irole } from '../role/role.model'

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

/**
 * interface logout user current
 */
export interface IuserLogout {
  disconnect?: boolean
}
