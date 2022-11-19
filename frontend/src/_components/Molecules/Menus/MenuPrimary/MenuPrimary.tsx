import React from 'react'
import { AppStore } from '../../../../_store'
import { LinkPrimary } from '../../../Atoms/Links/LinkPrimary/LinkPrimary'
import './MenuPrimary.css'

export function MenuPrimary() {
  // recover value of active menu mobie
  const activeMenuMobile = AppStore.useActiveMenuMobile()

  return (
    <nav
      className={`sm:block ${
        activeMenuMobile ? 'menu-primary-mobile-active' : 'hidden sm:block'
      }`}>
      <ul className='flex flex-col sm:flex-row'>
        <li className='mb-2 sm:mb-0'>
          <LinkPrimary link='/projects'>Projets</LinkPrimary>
        </li>
        <li className='mb-2 sm:mb-0'>
          <LinkPrimary link='/contact'>Contact</LinkPrimary>
        </li>
      </ul>
    </nav>
  )
}
