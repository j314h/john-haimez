import { Component } from 'solid-js'
import { BtnMenuMobile } from '../../Atoms/Btns/BtnMenuMobile/BtnMenuMobile'
import { LinkBrand } from '../../Atoms/Links/LinkBrand/LinkBrand'
import { NavPrimary } from '../../Molecules/NavPrimary/NavPrimary'
import './Header.css'

export const Header: Component = () => {
  return (
    <header class='header-public'>
      {/* link home brand */}
      <LinkBrand />

      {/* btn menu mobile */}
      <BtnMenuMobile />

      {/* nav primary */}
      <NavPrimary />

      {/* menu avatar or link page connexion user
      and icon menu for mobile */}
    </header>
  )
}
