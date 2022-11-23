import { AxiosError } from 'axios'
import { BehaviorSubject } from 'rxjs'
import { AppStore } from '..'
import { createHook } from '../../shared/StoreService'
import { IerrorApp } from '../../types'

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

  /**
   * create error for all observable
   * @param observable BehaviorSubject<string>
   * @param error any
   * @param value? string
   */
  errorMessage: (
    error: any,
    messageCustom?: string,
  ): { errorApp: IerrorApp } => {
    const errorApp = {
      active: false,
      message: messageCustom ?? null,
    }
    if (error instanceof AxiosError) {
      const { message, statusCode } = error.response?.data
      if (statusCode !== 200 || statusCode !== 201 || statusCode !== 204) {
        errorApp.active = true
        errorApp.message = messageCustom ?? message
        return { errorApp }
      }
    }

    return { errorApp }
  },
}
