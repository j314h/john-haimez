import { AppStore } from '..'
import { createHook } from '../../shared/StoreService'

export const AppService = {
  /**
   * hook for value of observable active menu mobile
   */
  useActiveMenuMobile: createHook(AppStore.activeMenuMobile$),

  /**
   * switch open or close menu mobile
   */
  switchActiveMenuMobile: (value: boolean) => {
    AppStore.activeMenuMobile$.next(!value)
  },

  /**
   * close menu mobile
   */
  closeActiveMenuMobile: () => {
    AppStore.activeMenuMobile$.next(false)
  },
}
