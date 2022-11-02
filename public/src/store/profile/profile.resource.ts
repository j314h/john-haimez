import { http } from '../../shared/http/http.instance'
import { IprofilesResponse } from '../../types/Profile.type'
import { profileAction } from './profile.action'

export const profileResource = {
  async getAllProfiles() {
    try {
      const res = await http.get<IprofilesResponse>('profiles?page=1')
      if (res.data['hydra:member'][0]) {
        profileAction.addOneProfile(res.data['hydra:member'][0])
      }
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
}
