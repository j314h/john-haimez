import { createEffect, Ref } from 'solid-js'
import { createStore } from 'solid-js/store'
import { appAction } from './app.action'

/**
 * store for other properties of app
 */
export const [appStore, setAppStore] = createStore({
  activeMenuMobile: false,
})

/**
 * function close all menu when click on element html
 * @param el HTMLElement
 */
export const refMenus = (el: HTMLElement) => {
  el.addEventListener('click', () => {
    appAction.closeMenuMobile()
  })
}
