import { Iuser } from '@types-app/models/user.model'
import { BehaviorSubject } from 'rxjs'

export const userStore = {
  /**
   * information of user connected
   */
  userCurrent$: new BehaviorSubject({} as Iuser),

  /**
   * loader for login request
   */
  loginLoading$: new BehaviorSubject(false),

  /**
   * error connxion user
   */
  loginError$: new BehaviorSubject(''),

  /**
   * loader for logout request
   */
  logoutLoading$: new BehaviorSubject(false),
}
