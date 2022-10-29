import { Component } from 'solid-js'
import { LinkBrand } from '../../Atoms/Links/LinkBrand/LinkBrand'
import { NavPrimary } from '../../Molecules/NavPrimary/NavPrimary'
import './Header.css'

export const Header: Component = () => {
  return (
    <header class='header-public'>
      {/* link home brand */}
      <LinkBrand />

      {/* nav primary */}
      <NavPrimary />

      {/* menu avatar or link page connexion user
      and icon menu for mobile */}
    </header>
  )
}
