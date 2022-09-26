import { Iuser } from './user.model'

/**
 * interface for jwt response api
 */
export interface Ijwt {
  connected: string
  access_token: string
  userCurrent: Iuser
}
