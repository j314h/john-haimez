import { Eerror } from '@atoms/errors/error-text/error.type'
import { http } from '@shared-app/http/http.instance'
import { appService } from '@store/app/app.service'
import { tokenService } from '@store/token/token.service'
import { Ijwt } from '@store/jwt/jwt.model'
import { Iuser, IuserLogout } from '@store/user/user.model'
import { Eroute } from '@types-app/route.type'
import { userStore } from './user.store'

export const userService = {
  /**
   * set user connected
   * @param user Iuser
   */
  setUserCurrent: (user: Iuser) => {
    userStore.userCurrent$.next({ ...user })
  },

  /**
   * remove user connected
   */
  removeUserCurrent: () => {
    userStore.userCurrent$.next({} as Iuser)
  },

  /**
   * reset all error related to user
   */
  resetError: () => {
    userStore.loginError$.next('')
  },

  /**
   * connexion user
   * @param email string
   * @param password string
   */
  login: async (email: string, password: string) => {
    try {
      userStore.loginLoading$.next(true)
      // login
      const res = await http.post<Ijwt>(`${Eroute.AUTH_LOGIN_POST}`, {
        email,
        password,
      })

      // is connected add token add userCurrent
      if (res.data.connected) {
        tokenService.setTokenWithSetStorage(res.data.access_token)
        userService.setUserCurrent(res.data.userCurrent)
      }

      userStore.loginLoading$.next(false)
      return true
    } catch (error) {
      appService.errorMessage(userStore.loginError$, error, Eerror.LOGIN)
      userStore.loginLoading$.next(false)
      return false
    }
  },

  /**
   * disconnect user
   */
  logout: async () => {
    try {
      userStore.logoutLoading$.next(true)
      // logout
      const res = await http.delete<IuserLogout>(`${Eroute.AUTH_LOGOUT_DELETE}`)

      // if disconnect remove token remove usercurrent
      if (res.data.disconnect) {
        tokenService.removeTokenAndStorage()
        userService.removeUserCurrent()
      }

      userStore.logoutLoading$.next(false)
    } catch (error) {
      tokenService.removeTokenAndStorage()
      userService.removeUserCurrent()
      userStore.logoutLoading$.next(false)
    }
  },
}
