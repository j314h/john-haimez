import { Terror } from '@atoms/errors/error-text/error.type'
import { BehaviorSubject } from 'rxjs'

export const profilUserStore = {
  /**
   * observable for see or not form profil user
   */
  displayForm$: new BehaviorSubject(false),

  /**
   * observale for loading update ptofil user info
   */
  loadingUpdateProfilUserInfo$: new BehaviorSubject(false),

  /**
   * observale for loading update ptofil user password
   */
  loadingUpdateProfilUserPassword$: new BehaviorSubject(false),

  /**
   * error for update profil user info
   */
  errorUpdateProfilUserInfo$: new BehaviorSubject<Terror>({} as Terror),

  /**
   * error for update profil user passsword
   */
  errorUpdateProfilUserPassword$: new BehaviorSubject<Terror>({} as Terror),
}
