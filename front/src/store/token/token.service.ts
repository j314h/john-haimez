import { http } from '@shared-app/http/http.instance'
import { tokenStore } from './token.store'

export const tokenService = {
  /**
   * verified token in api
   */
  verifiedConnected() {
    http
      .get('auth/verified')
      .then(response => {
        if (response.data.authenticated) {
          tokenService.setToken(localStorage.getItem('nekto')!)
          // UserService.setUserCurrent(res.data.user);
        } else {
          tokenService.removeTokenAndStorage()
          // UserService.removeUserCurrent();
        }
      })
      .catch(() => {
        tokenService.removeTokenAndStorage()
      })
  },

  /**
   * return a value of storage for token
   * @returns boolean
   */
  checkStorageForExistToken: () => localStorage.getItem('nekto'),

  /**
   * if token exist in storage
   * add token intoken$
   * else remove token in storage and reset token$
   */
  checkStorageForConnected() {
    if (localStorage.getItem('nekto')) {
      tokenService.setToken(localStorage.getItem('nekto')!)
      return localStorage.getItem('nekto')!
    }

    tokenService.removeTokenAndStorage()
    return null
  },

  /**
   * set token in token$
   * @param token string
   */
  setToken(token: string) {
    tokenStore.token$.next(token)
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
  }
}
