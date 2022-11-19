import React, { useEffect } from 'react'
import { ButtonMenuMobile, ButtonModeDark, LinkBrand, MenuPrimary } from '../..'
import './Header.css'

export function Header() {
  return (
    <header className='header'>
      <div>
        <LinkBrand link='/'>JH</LinkBrand>
        <ButtonModeDark addClass='ml-2 sm:ml-6' />
      </div>

      <div>
        <MenuPrimary />
        <ButtonMenuMobile />
      </div>
    </header>
  )
}
