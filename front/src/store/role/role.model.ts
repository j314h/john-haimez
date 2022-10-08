import { Iuser } from '../user/user.model'

/**
 * intreface for role
 */
export interface Irole {
  id?: number
  libelle?: string
  users?: Iuser[]
}
