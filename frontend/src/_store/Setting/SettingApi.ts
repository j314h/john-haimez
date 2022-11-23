import { AppService, SettingStore } from '..'
import { AxiosService } from '../../shared/AxiosService'
import { EsettingCallApi, Isetting, IsettingsResponseAxios } from '../../types'

export const SettingApi = {
  /**
   * get all settings
   * @returns IerrorApp | undefined
   */
  gets: async () =>
    AxiosService.findAll<IsettingsResponseAxios>(
      EsettingCallApi.CALL_ALL,
      SettingStore.settings$,
    ),

  /**
   * get one setting for setting selected
   * @returns IerrorApp | undefined
   */
  get: async (id: number) =>
    AxiosService.find<Isetting>(
      EsettingCallApi.CALL_ALL,
      id,
      SettingStore.settingSelected$,
    ),

  create: () => {
    try {
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

  update: () => {
    try {
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

  delete: () => {
    try {
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },
}
