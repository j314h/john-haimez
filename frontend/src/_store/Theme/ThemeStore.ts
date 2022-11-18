import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { createHook } from '../../shared/StoreService'

const modeDark = new BehaviorSubject(
  localStorage.getItem('color-theme') === 'dark',
)

export const ThemeStore = {
  useModeDark: createHook<boolean>(modeDark),

  /**
   * start, reload project
   * if color-theme in localstorage is equal 'dark'
   * add class dark in balise html
   */
  startCheckDarkMode: () => {
    if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },

  /**
   * switch a mode dark
   * @param value boolean
   */
  switchModeDark: (value: boolean) => {
    const newDarkMode = !value
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
    modeDark.next(newDarkMode)
  },
}
