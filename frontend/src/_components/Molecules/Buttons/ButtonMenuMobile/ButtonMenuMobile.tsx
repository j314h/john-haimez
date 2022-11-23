import React from 'react'
import { ButtonIcon } from '../../..'
import { TbuttonMenuMobile } from '../../../../types'
import { AppService } from '../../../../_store'
import './ButtonMenuMobile.css'

export function ButtonMenuMobile({}: TbuttonMenuMobile) {
  // recover value of active menu mobie
  const activeMenuMobile = AppService.useActiveMenuMobile()

  return (
    <ButtonIcon
      addClass={`${
        activeMenuMobile ? 'btn-menu-mobile-active' : 'btn-menu-mobile'
      }`}
      click={() => AppService.switchActiveMenuMobile(activeMenuMobile)}>
      <div></div>
      <div></div>
      <div></div>
    </ButtonIcon>
  )
}
