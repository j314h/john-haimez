import { AppService, ProfileStore } from '..'
import { AxiosService } from '../../shared/AxiosService'
import { EprofileCallApi, IprofilesResponseAxios } from '../../types'

export const ProfileApi = {
  /**
   * get all profiles
   * @returns
   */
  gets: async () => {
    const res = await AxiosService.findAll<IprofilesResponseAxios>(
      EprofileCallApi.CALL_ALL,
      ProfileStore.profiles$,
    )
    return res
  },
}
