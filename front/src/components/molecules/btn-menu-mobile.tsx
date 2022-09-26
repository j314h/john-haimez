import { BtnIcon } from '@atoms/btns/btn-icon'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { MenuMobileIcon } from '@atoms/icons/menu-mobile-icon'
import { store } from '@store/store'
import { TbtnMenuMobile } from '@types-app/btn.type'
import React from 'react'

/**
 * Btn for menu on mobile
 * @param hidden?: string | undefined;
 * @returns
 */
export function BtnMenuMobile({ hidden }: TbtnMenuMobile) {
  const menuPrimaryMobileActivate = store.app.useMenuPrimaryMobileActivate()

  return (
    <BtnIcon
      addClass={hidden ?? 'md:hidden'}
      click={() =>
        store.app.switchMenuPrimaryMobileActivate(menuPrimaryMobileActivate)
      }>
      {menuPrimaryMobileActivate ? (
        <CrossIcon color='text-red-500' />
      ) : (
        <MenuMobileIcon />
      )}
    </BtnIcon>
  )
}
