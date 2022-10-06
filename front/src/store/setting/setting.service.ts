import { Eerror, Terror } from '@atoms/errors/error-text/error.type'
import { http } from '@shared-app/http/http.instance'
import { appService } from '@store/app/app.service'
import { Eroute, IresponseCallApi } from '@types-app/route.type'
import { Isetting } from './setting.model'
import { settingStore } from './setting.store'

export const settingService = {
  findFirst: async () => {
    try {
      await http.get(Eroute.SETTING_POS_PAT_DEL)
    } catch (error) {
      appService.errorMessage(
        settingStore.settingError$,
        error,
        Eerror.CREATE_SETTING,
        ['copyright'],
      )
      settingStore.settingLoading$.next(false)
    }
  },
  /**
   * create setting
   */
  create: async (data: Isetting) => {
    try {
      settingStore.settingLoading$.next(true)
      await http.post<IresponseCallApi>(Eroute.SETTING_POS_PAT_DEL, data)
      settingStore.settingLoading$.next(false)
    } catch (error) {
      appService.errorMessage(
        settingStore.settingError$,
        error,
        Eerror.CREATE_SETTING,
        ['copyright'],
      )
      settingStore.settingLoading$.next(false)
    }
  },

  /**
   * update setting
   */
  update: async (id: number, data: Isetting) => {
    try {
      settingStore.settingLoading$.next(true)
      await http.patch(`${Eroute.SETTING_POS_PAT_DEL}/${id}`, data)
      settingStore.settingLoading$.next(false)
    } catch (error) {
      appService.errorMessage(
        settingStore.settingError$,
        error,
        Eerror.CREATE_SETTING,
        ['copyright'],
      )
      settingStore.settingLoading$.next(false)
    }
  },

  /**
   * delete setting
   */
  delete: async (id: number) => {
    try {
      settingStore.settingLoading$.next(true)
      await http.delete(`${Eroute.SETTING_POS_PAT_DEL}/${id}`)
      settingStore.settingLoading$.next(false)
    } catch (error) {
      appService.errorMessage(
        settingStore.settingError$,
        error,
        Eerror.CREATE_SETTING,
        ['copyright'],
      )
      settingStore.settingLoading$.next(false)
    }
  },

  /**
   * toggle display form
   */
  switchDisplayForm: (value: boolean) => {
    settingStore.settingDisplayForm$.next(!value)
  },

  /**
   * close display form
   */
  closedForm: () => {
    settingStore.settingDisplayForm$.next(false)
  },

  /**
   * reset error for setting
   */
  resetError: () => {
    settingStore.settingError$.next({} as Terror)
  },
}
