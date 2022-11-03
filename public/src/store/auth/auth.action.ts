import { AxiosError } from 'axios'
import { setAuthStore } from './auth.store'

export const authAction = {
  /**
   * check localstorage for token
   */
  checkTokenLocal() {
    if (localStorage.getItem('nekto')) {
      setAuthStore('token', localStorage.getItem('nekto')!)
    }
  },

  /**
   * add token in store auth
   */
  addToken(token: string) {
    localStorage.setItem('nekto', token)
    setAuthStore('token', token)
  },

  /**
   * delete token
   */
  deleteToken() {
    localStorage.removeItem('nekto')
    setAuthStore('token', '')
  },

  /**
   * active loading for auth action
   */
  activeLoading() {
    setAuthStore('loading', true)
  },

  /**
   * disable loading for auth action
   */
  disableLoading() {
    setAuthStore('loading', false)
  },

  /**
   * if error on login user add that
   * @param error string
   */
  addError(error: AxiosError | any) {
    if (error instanceof AxiosError) {
      if (error.response?.data.message === 'Invalid credentials.') {
        setAuthStore('error', 'Une Erreur est survenue')
      }
    }
  },

  /**
   * reset error for login user
   */
  resetError() {
    setAuthStore('error', '')
  },
}
