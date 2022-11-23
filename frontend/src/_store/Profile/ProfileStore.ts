import { BehaviorSubject } from 'rxjs'
import { Iprofile } from '../../types/ProfileType'

export const ProfileStore = {
  // all profile
  profiles$: new BehaviorSubject<Iprofile[]>([]),
}
