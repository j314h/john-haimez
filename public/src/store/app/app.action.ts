import { setAppStore } from './app.store'

export const appAction = {
  /**
   * toggle menu mobile
   */
  switchMenuMobile: () => {
    setAppStore('activeMenuMobile', v => !v)
  },

  /**
   * close menu mobile
   */
  closeMenuMobile: () => {
    setAppStore('activeMenuMobile', false)
  },
}
