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
   * create error for all observable
   * @param observable BehaviorSubject<string>
   * @param error any
   * @param value? string
   */
  errorMessage: (
    observable: BehaviorSubject<string>,
    error: any,
    value?: string,
  ) => {
    if (error instanceof AxiosError) {
      const { message, statusCode } = error.response?.data
      if (statusCode !== 200 || statusCode !== 201) {
        observable.next(value ?? message)
      }
    }
  },
}
