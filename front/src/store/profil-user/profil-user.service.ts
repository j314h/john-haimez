import { Eerror } from '@atoms/errors/error-text/error.type'
import { http } from '@shared-app/http/http.instance'
import { store } from '@store/store'
import { IjwtVerified } from '@types-app/jwt.model'
import { Eroute } from '@types-app/route.type'
import { Etoast } from '@types-app/toast.type'
import { Iuser } from '@types-app/user.model'
import { toast } from 'react-toastify'

export const profilUserService = {
  /**
   * modifie name and email user current
   * @param data Iuser
   * @returns boolea
   */
  updateProfilUserInfo: async (data: Iuser) => {
    try {
      const res = await http.patch<Iuser>(
        `${Eroute.AUTH_UPDATE_USER_CURRENT}`,
        data,
      )
      if (res) {
        store.user.setUserCurrent(res.data)
        store.profilUser.loadingUpdateProfilUserInfo$.next(false)
        toast.success(Etoast.UPDATE_USER_INFO)
        return true
      }
      return false
    } catch (error) {
      store.app.errorMessage(
        store.profilUser.errorUpdateProfilUserInfo$,
        error,
        Eerror.UPDATE_PROFIL_USER_INFO,
        ['copyright'],
      )
      store.profilUser.loadingUpdateProfilUserInfo$.next(false)
      return false
    }
  },

  /**
   * open / close form profil user info
   */
  switchDisplayForm: (value: boolean) => {
    store.profilUser.displayForm$.next(!value)
  },

  /**
   * close form profil user info
   */
  closeDisplayForm: () => {
    store.profilUser.displayForm$.next(false)
  },

  /**
   * open form profil user info
   */
  openDisplayForm: () => {
    store.profilUser.displayForm$.next(true)
  },
}
