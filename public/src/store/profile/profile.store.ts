import { createStore } from 'solid-js/store'
import { Iprofile, IprofileStore } from '../../types/Profile.type'

export const [profileStore, setProfileStore] = createStore<IprofileStore>({
  profiles: [],
  profile: {} as Iprofile,
})
