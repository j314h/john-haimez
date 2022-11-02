import { Component } from 'solid-js'
import { refMenus } from '../../../store/app/app.store'
import { authStore } from '../../../store/auth/auth.store'
import { LinkMenuSecondary } from '../../Atoms/Links/LinkMenuSecondary/LinkMenuSecondary'
import './NavFooter.css'

export const NavFooter: Component<{}> = props => {
  const textLinkLogin = () =>
    authStore.token !== '' ? 'Mon compte' : 'Connexion'

  return (
    <nav class='nav-footer' ref={refMenus}>
      <ul>
        <li>
          <LinkMenuSecondary link='/' text='Accueil' />
        </li>
        <li>
          <LinkMenuSecondary link='/projects' text='Projets' />
        </li>
        <li>
          <LinkMenuSecondary link='/contact' text='Contact' />
        </li>
        <li>
          <LinkMenuSecondary link='/login' text={textLinkLogin()} />
        </li>
        <li>
          <LinkMenuSecondary link='/conditions' text='Conditions générales' />
        </li>
      </ul>
    </nav>
  )
}
