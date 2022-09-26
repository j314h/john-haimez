import { BehaviorSubject } from 'rxjs'

export const appStore = {
  /**
   * check for menu is activate or not activated
   */
  menuPrimaryMobileActivate$: new BehaviorSubject(false),
}
