import { Iuser } from '@types-app/models/user.model'
import { BehaviorSubject } from 'rxjs'

export const userStore = {
  userCurrent$: new BehaviorSubject({} as Iuser),
}
