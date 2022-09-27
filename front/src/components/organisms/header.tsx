import { BtnDarkMode } from '@molecules/btn-darkmode'
import { BtnMenuMobile } from '@molecules/btn-menu-mobile'
import { LinkBrandHeader } from '@molecules/link-brand-header'
import { NavPrimary } from '@molecules/menu-primary'
import MenuUserCurrent from '@molecules/menu-user-current'
import React from 'react'

export function Header() {
  // ! if user see to btn avatar
  return (
    <header
      className='
    flex flex-nowrap md:justify-between items-center
    mx-auto w-full
    px-4 py-4 md:px-20 md:py-8
    text-black dark:text-white
    bg-fond_claire
    dark:bg-fond_dark
    '>
      {/* brand */}
      <LinkBrandHeader addClass='flex-1' />

      {/* btn dark mode */}
      <BtnDarkMode />

      {/* menu avatar if user connected */}
      <MenuUserCurrent />

      {/* btn menu mobile */}
      <BtnMenuMobile />

      {/* menu */}
      <NavPrimary />
    </header>
  )
}
