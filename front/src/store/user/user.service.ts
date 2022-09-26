import { http } from '@shared-app/http/http.instance'
import { appService } from '@store/app/app.service'
import { tokenService } from '@store/token/token.service'
import { Eerror } from '@types-app/error.type'
import { Ijwt } from '@types-app/models/jwt.model'
import { Iuser } from '@types-app/models/user.model'
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
      const res = await http.post<Ijwt>(
        `${process.env.REACT_APP_URL_API}${Eroute.AUTH_LOGIN_POST}`,
        { email, password },
      )

      // is connected add token add userCurrent
      if (res.data.connected) {
        tokenService.setTokenWithSetStorage(res.data.access_token)
        userService.setUserCurrent(res.data.userCurrent)
      }

      userStore.loginLoading$.next(false)
    } catch (error) {
      appService.errorMessage(userStore.loginError$, error, Eerror.LOGIN)
      userStore.loginLoading$.next(false)
    }
  },

  /**
   * disconnect user
   */
  logout: () => {},
}
