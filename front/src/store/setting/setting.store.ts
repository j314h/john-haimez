import { Terror } from '@atoms/errors/error-text/error.type'
import { BehaviorSubject } from 'rxjs'
import { Isetting } from './setting.model'

export const settingStore = {
  /**
   * load for get setting
   */
  settingLoading$: new BehaviorSubject<boolean>(false),

  /**
   * display form setting or not
   */
  settingDisplayForm$: new BehaviorSubject<boolean>(false),

  /**
   * error for create or update setting
   */
  settingError$: new BehaviorSubject<Terror>({}),
}
