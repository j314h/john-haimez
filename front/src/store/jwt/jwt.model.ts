import { Iuser } from '../user/user.model'

/**
 * interface for jwt response api
 */
export interface Ijwt {
  connected: string
  access_token: string
  userCurrent: Iuser
}

/**
 * interface for verified token
 */
export interface IjwtVerified {
  connected: string
  userCurrent: Iuser
}
