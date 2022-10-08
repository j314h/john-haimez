import { BehaviorSubject } from 'rxjs'

export const appStore = {
  /**
   * check for menu is activate or not activated
   */
  menuPrimaryMobileActivate$: new BehaviorSubject(false),

  /**
   * check for menu avatar is activate or not
   */
  menuUserAvatarActivate$: new BehaviorSubject(false),

  /**
   * check for menu side is active or not
   */
  menuSideActive$: new BehaviorSubject(false),
}
