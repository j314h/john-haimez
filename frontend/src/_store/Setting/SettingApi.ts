import { SettingStore } from '..'
import { http } from '../../shared/AxiosInstance'
import { IsettingsResponseAxios } from '../../types'

export const SettingApi = {
  gets: async () => {
    try {
      const allSettings = await http.get<IsettingsResponseAxios>('settings')
      SettingStore.settings$.next([...allSettings.data['hydra:member']])
    } catch (error) {}
  },

  get: async (id: number) => {
    try {
      const allSettings = await http.get(`settings/${id}`)
      console.log(allSettings)
    } catch (error) {}
  },

  create: () => {
    try {
    } catch (error) {}
  },

  update: () => {
    try {
    } catch (error) {}
  },

  delete: () => {
    try {
    } catch (error) {}
  },
}
