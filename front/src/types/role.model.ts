import { Iuser } from './user.model'

/**
 * intreface for role
 */
export interface Irole {
  id?: number
  libelle?: string
  users?: Iuser[]
}
