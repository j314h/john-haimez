import { AxiosService } from '../../shared/AxiosService'
import {
  EprofileCallApi,
  IprofilesResponseAxios,
} from '../../types/ProfileType'
import { ProfileStore } from './ProfileStore'

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
}
