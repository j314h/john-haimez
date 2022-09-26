import { appStore } from './app.store'

export const appService = {
  /**
   * switch value of menu primary mobile activate
   */
  switchMenuPrimaryMobileActivate: (value: boolean) => {
    appStore.menuPrimaryMobileActivate$.next(!value)
  },

  /**
   * set menu primary mobile activate on false
   */
  menuPrimaryMobileActivateSetFalse: () => {
    appStore.menuPrimaryMobileActivate$.next(false)
  },

  /**
   * set menu primary mobile activate on true
   */
  menuPrimaryMobileActivateSetTrue: () => {
    appStore.menuPrimaryMobileActivate$.next(true)
  },
}
