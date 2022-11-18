import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { createHook } from '../../shared/StoreService'

const modeDark = new BehaviorSubject(false)

export const ThemeStore = {
  useModeDark: createHook<boolean>(modeDark),
  switchModeDark: (value: boolean) => {
    modeDark.next(!value)
  },
}
