import { AppService, SettingStore } from '..'
import { http } from '../../shared/AxiosInstance'
import { EsettingCallApi, Isetting, IsettingsResponseAxios } from '../../types'

export const SettingApi = {
  /**
   * get all settings
   * @returns IerrorApp | undefined
   */
  gets: async () => {
    try {
      const allSettings = await http.get<IsettingsResponseAxios>(
        EsettingCallApi.CALL_ALL,
      )
      SettingStore.settings$.next([...allSettings.data['hydra:member']])
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

  /**
   * get one setting for setting selected
   * @returns IerrorApp | undefined
   */
  get: async (id: number) => {
    try {
      const allSettings = await http.get<Isetting>(
        `${EsettingCallApi.CALL_ALL}/${id}`,
      )
      SettingStore.settingSelected$.next({ ...allSettings.data })
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

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
