import { BehaviorSubject } from 'rxjs'
import { Isetting } from './setting.model'

export const settingStore = {
  /**
   * observable for model one setting
   */
  setting$: new BehaviorSubject({} as Isetting),
}
