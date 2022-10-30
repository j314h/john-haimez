import { Component } from 'solid-js'
import { appStore } from '../../../store/app/app.store'
import { LinkMenuPrimary } from '../../Atoms/Links/LinkMenuPrimary/LinkMenuPrimary'
import './NavPrimary.css'

export const NavPrimary: Component = () => {
  return (
    <nav
      class='nav-primary'
      classList={{
        'invisible sm:visible': !appStore.activeMenuMobile,
        visible: appStore.activeMenuMobile,
      }}>
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
