import React from 'react'
import { ButtonIcon } from '../../..'
import { TbuttonMenuMobile } from '../../../../types'
import { AppStore } from '../../../../_store'
import './ButtonMenuMobile.css'

export function ButtonMenuMobile({}: TbuttonMenuMobile) {
  // recover value of active menu mobie
  const activeMenuMobile = AppStore.useActiveMenuMobile()

  return (
    <ButtonIcon
      addClass={`${
        activeMenuMobile ? 'btn-menu-mobile-active' : 'btn-menu-mobile'
      }`}
      click={() => AppStore.switchActiveMenuMobile(activeMenuMobile)}>
      <div></div>
      <div></div>
      <div></div>
    </ButtonIcon>
  )
}
