import { AppService, ProfileStore } from '..'
import { AxiosService } from '../../shared/AxiosService'
import { EprofileCallApi, IprofilesResponseAxios } from '../../types'

export const ProfileApi = {
  /**
   * get all profiles
   * @returns
   */
  gets: async () =>
    AxiosService.findAll<IprofilesResponseAxios>(
      EprofileCallApi.CALL_ALL,
      ProfileStore.profiles$,
    ),

  create: async () => {
    try {
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

  update: async () => {
    try {
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

  delete: async () => {
    try {
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },
}
