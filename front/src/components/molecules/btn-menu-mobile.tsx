import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { MenuMobileIcon } from '@atoms/icons/menu-mobile-icon'
import { store } from '@store/store'
import React from 'react'

/**
 * Btn for menu on mobile
 * @param hidden?: string | undefined;
 * @returns
 */
export function BtnMenuMobile() {
  const menuPrimaryMobileActivate = store.app.useMenuPrimaryMobileActivate()

  const handlerClickBtnIcon = () => {
    store.app.switchMenuPrimaryMobileActivate(menuPrimaryMobileActivate)
    store.app.menuUserAvatarActivateSetFalse()
  }

  return (
    <div className={'md:hidden'}>
      <BtnIconPrimary click={handlerClickBtnIcon}>
        {menuPrimaryMobileActivate ? (
          <CrossIcon color='text-red-500' />
        ) : (
          <MenuMobileIcon />
        )}
      </BtnIconPrimary>
    </div>
  )
}
