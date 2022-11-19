import { BehaviorSubject } from 'rxjs'
import { createHook } from '../../shared/StoreService'

const activeMenuMobile$ = new BehaviorSubject(false)

export const AppStore = {
  useActiveMenuMobile: createHook(activeMenuMobile$),

  /**
   * switch open or close menu mobile
   */
  switchActiveMenuMobile: (value: boolean) => {
    activeMenuMobile$.next(!value)
  },

  /**
   * close menu mobile
   */
  closeActiveMenuMobile: () => {
    activeMenuMobile$.next(false)
  },
}
