import { BehaviorSubject } from 'rxjs'
import { createHookObject } from '../../shared/StoreService'
import { Isetting } from '../../types'

const setting$ = new BehaviorSubject<Isetting>({} as Isetting)

export const SettingStore = {
  useSetting: createHookObject<Isetting>(setting$),

  get: () => {},
  create: () => {},
  update: () => {},
  delete: () => {},
}
