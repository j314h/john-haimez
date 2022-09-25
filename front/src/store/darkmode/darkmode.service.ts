import { darkModeStore } from './darkmode.store'

export const darkModeService = {
  /**
   * start, reload project
   * if color-theme in localstorage is equal 'dark'
   * add class dark in balise html
   */
  startCheckDarkMode() {
    if (localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },

  /**
   * active or disable dark mode
   */
  switchDarkMode(value: boolean) {
    const newDarkMode = !value
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    darkModeStore.darkModeActivate$.next(newDarkMode)
  },
}
