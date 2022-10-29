import { Component } from 'solid-js'
import { LinkMenuPrimary } from '../../Atoms/Links/LinkMenuPrimary/LinkMenuPrimary'
import './NavPrimary.css'

export const NavPrimary: Component = () => {
  return (
    <nav class='nav-primary'>
      <ul class='list-nav-primary'>
        <li>
          <LinkMenuPrimary link='/projects' text='Projets' />
        </li>
        <li>
          <LinkMenuPrimary link='/contact' text='Contact' />
        </li>
      </ul>
    </nav>
  )
}
