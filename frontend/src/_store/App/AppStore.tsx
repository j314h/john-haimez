import { BehaviorSubject } from 'rxjs'

export const AppStore = {
  // state of menu mobile is open (true) or closed (false)
  activeMenuMobile$: new BehaviorSubject(false),
  // loader global
  activeLoader$: new BehaviorSubject(true),
}
