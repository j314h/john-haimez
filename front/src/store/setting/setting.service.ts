import { Eerror, Terror } from '@atoms/errors/error-text/error.type'
import { http } from '@shared-app/http/http.instance'
import { appService } from '@store/app/app.service'
import { Eroute, IresponseCallApi } from '@types-app/route.type'
import { Etoast } from '@types-app/toast.type'
import { toast } from 'react-toastify'
import { Isetting } from './setting.model'
import { settingStore } from './setting.store'

export const settingService = {
  /**
   * get one first setting
   */
  findFirst: async () => {
    try {
      const res = await http.get<IresponseCallApi>(
        Eroute.SETTING_GET_POS_PAT_DEL,
      )
      if (res.data.findFirst) {
        // * action other not obligatory
      }
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
      const res = await http.post<IresponseCallApi>(
        Eroute.SETTING_GET_POS_PAT_DEL,
        data,
      )
      if (res.data.created) {
        toast.success(Etoast.SETTING_CREATE_SUCCESS)
      }
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
      const res = await http.patch<IresponseCallApi>(
        `${Eroute.SETTING_GET_POS_PAT_DEL}/${id}`,
        data,
      )
      if (res.data.updated) {
        toast.success(Etoast.SETTING_UPDATE_SUCCESS)
      }
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
      const res = await http.delete<IresponseCallApi>(
        `${Eroute.SETTING_GET_POS_PAT_DEL}/${id}`,
      )
      if (res.data.deleted) {
        toast.success(Etoast.SETTING_DELETE_SUCCESS)
      }
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
   * active loading for create update setting
   */
  activeLoading: () => {
    settingStore.settingLoading$.next(true)
  },

  /**
   * disabled loading for create update setting
   */
  disabledLoading: () => {
    settingStore.settingLoading$.next(false)
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
