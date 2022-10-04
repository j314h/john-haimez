import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { Divisor } from '@atoms/divisors/divisor'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { MenuMobileIcon } from '@atoms/icons/menu-mobile-icon'
import { MenuSide } from '@molecules/menu-side/menu-side'
import { store } from '@store/store'
import React from 'react'
import './section-menu-side.css'

export function SectionMenuSide() {
  const stateMenu = store.app.useMenuSideActivate()

  return (
    <nav
      className={`${
        stateMenu ? 'section-menu-side-open' : 'section-menu-side-close'
      }`}>
      {/* btn close menu side */}
      <BtnIconPrimary
        addClass={`${stateMenu ? 'ml-auto' : null}`}
        click={() => store.app.switchMenuSideActivate(stateMenu)}>
        {stateMenu ? <CrossIcon color='text-error' /> : <MenuMobileIcon />}
      </BtnIconPrimary>

      {/* divisor */}
      <Divisor />

      {/* menu */}
      <MenuSide />
    </nav>
  )
}
