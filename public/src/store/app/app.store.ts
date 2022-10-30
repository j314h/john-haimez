import { createStore } from 'solid-js/store'

export const [appStore, setAppStore] = createStore({
  activeMenuMobile: false,
})
