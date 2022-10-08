import { BtnDarkMode } from '@molecules/btn-darkmode'
import { BtnMenuMobile } from '@molecules/btn-menu-mobile'
import { LinkBrandHeader } from '@molecules/link-brand-header/link-brand-header'
import { NavPrimary } from '@molecules/menu-primary'
import MenuUserCurrent from '@molecules/menu-user-current'
import { store } from '@store/store'
import './header.css'
import React from 'react'

export function Header() {
  const userCurrent = store.user.useUserCurrent()

  return (
    <header className='header-app'>
      {/* brand */}
      <LinkBrandHeader addClass='flex-1' />

      {/* btn dark mode */}
      <BtnDarkMode />

      {/* menu avatar if user connected */}
      {userCurrent.id ? <MenuUserCurrent /> : null}

      {/* btn menu mobile */}
      <BtnMenuMobile />

      {/* menu */}
      <NavPrimary />
    </header>
  )
}
