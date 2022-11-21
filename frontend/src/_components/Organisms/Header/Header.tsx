import React, { useEffect } from 'react'
import { ButtonMenuMobile, ButtonModeDark, LinkBrand, MenuPrimary } from '../..'
import './Header.css'

export function Header() {
  return (
    <header className='header'>
      {/* link home + btn dark mode */}
      <div>
        <LinkBrand>JH</LinkBrand>
        <ButtonModeDark addClass='ml-2 sm:ml-6' />
      </div>

      {/* btn menu moble + menu primary */}
      <div>
        <MenuPrimary />
        <ButtonMenuMobile />
      </div>
    </header>
  )
}
