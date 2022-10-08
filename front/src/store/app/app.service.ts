import { AxiosError } from 'axios'
import { BehaviorSubject } from 'rxjs'
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

  /**
   * toggle menu avatar
   * @param value boolean
   */
  switchMenuUserAvatarActivate: (value: boolean) => {
    appStore.menuUserAvatarActivate$.next(!value)
  },

  /**
   * close menu avatar
   */
  menuUserAvatarActivateSetFalse: () => {
    appStore.menuUserAvatarActivate$.next(false)
  },

  /**
   * open menu avatar
   */
  menuUserAvatarActivateSetTrue: () => {
    appStore.menuUserAvatarActivate$.next(true)
  },

  /**
   * switch toggle menu side
   */
  switchMenuSideActivate: (value: boolean) => {
    appStore.menuSideActive$.next(!value)
  },

  /**
   * close menu side
   */
  menuSideActivateFalse: () => {
    appStore.menuSideActive$.next(false)
  },

  /**
   * open menu side
   */
  menuSideActivateTrue: () => {
    appStore.menuSideActive$.next(true)
  },

  /**
   * create error for all observable
   * @param observable BehaviorSubject<string>
   * @param error any
   * @param value? string
   */
  errorMessage: (
    observable: BehaviorSubject<any>,
    error: any,
    value?: string,
    nameInput?: string[],
  ) => {
    if (error instanceof AxiosError) {
      const { message, statusCode } = error.response?.data
      if (statusCode !== 200 || statusCode !== 201) {
        observable.next({
          message: value ?? message,
          nameInput: nameInput ?? [],
        })
      }
    }
  },
}
