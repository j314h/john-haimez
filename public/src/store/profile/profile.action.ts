import { Iprofile } from '../../types/Profile.type'
import { profileStore, setProfileStore } from './profile.store'

export const profileAction = {
  addProfiles(profiles: [Iprofile]) {
    if (profileStore.profiles.length === 0) {
      setProfileStore('profiles', [...profiles])
    }
  },
  addOneProfiles(profile: Iprofile) {
    setProfileStore('profiles', v => [...v, profile])
  },
  addOneProfile(profile: Iprofile) {
    setProfileStore('profile', { ...profile })
  },
  removeProfiles() {
    setProfileStore('profiles', [])
  },
  removeOneProfiles(profileId: number) {
    const profiles = profileStore.profiles.filter(el => el.id !== profileId)
    setProfileStore('profiles', [...profiles])
  },
  removeOneProfile() {},
}
