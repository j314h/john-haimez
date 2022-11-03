import { Component, createSignal } from 'solid-js'
import { appAction } from '../../../../store/app/app.action'
import { appStore } from '../../../../store/app/app.store'
import { IbtnMenuMobile } from '../../../../types/Btn.type'
import './BtnMenuMobile.css'

export const BtnMenuMobile: Component<IbtnMenuMobile> = () => {
  const handlerBtnMenuMobile = () => {
    appAction.switchMenuMobile()
  }

  return (
    <button
      onClick={handlerBtnMenuMobile}
      classList={{
        'btn-menu-mobile': !appStore.activeMenuMobile,
        'btn-menu-mobile-active': appStore.activeMenuMobile,
      }}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}
