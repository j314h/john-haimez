import { http } from '@shared-app/http/http.instance'
import { userService } from '@store/user/user.service'
import { IjwtVerified } from '@types-app/models/jwt.model'
import { Eroute } from '@types-app/route.type'
import { tokenStore } from './token.store'

export const tokenService = {
  /**
   * verified token in api
   */
  verifiedConnected(): boolean {
    if (localStorage.getItem('nekto')) {
      http
        .get<IjwtVerified>(`${Eroute.AUTH_VERIFIED}`)
        .then(res => {
          if (res.data.connected) {
            tokenService.setToken(localStorage.getItem('nekto')!)
            userService.setUserCurrent(res.data.userCurrent)
            return true
          } else {
            tokenService.removeTokenAndStorage()
            userService.removeUserCurrent()
            return false
          }
        })
        .catch(() => {
          tokenService.removeTokenAndStorage()
          userService.removeUserCurrent()
          return false
        })
    } else {
      tokenService.removeTokenAndStorage()
      userService.removeUserCurrent()
      return false
    }
    return false
  },

  /**
   * return a value of storage for token
   * @returns boolean
   */
  checkStorageForExistToken: () => localStorage.getItem('nekto'),

  /**
   * if token exist in storage
   * add token in token$
   * else remove token in storage and reset token$
   */
  checkStorageForConnected() {
    if (localStorage.getItem('nekto')) {
      tokenService.setToken(localStorage.getItem('nekto')!)
      return localStorage.getItem('nekto')
    }

    tokenService.removeTokenAndStorage()
    return null
  },

  /**
   * set token in storage and in token$
   * @param token string
   */
  setTokenWithSetStorage(token: string) {
    localStorage.setItem('nekto', token)
    tokenStore.token$.next(token)
  },

  /**
   * remove token in storage and reset token$
   */
  removeTokenAndStorage() {
    localStorage.removeItem('nekto')
    tokenStore.token$.next('')
  },

  /**
   * set token in token$
   * @param token string
   */
  setToken(token: string) {
    tokenStore.token$.next(token)
  },
}
