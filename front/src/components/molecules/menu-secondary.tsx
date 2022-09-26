import { LinkTertiary } from '@atoms/links/link-tertiary'
import { store } from '@store/store'
import React from 'react'

/**
 * nev menu secondary default in footer
 */
export function NavSecondary() {
  const { myRef } = store.outsideClick.useOutSideClick()

  return (
    <nav ref={myRef}>
      <ul>
        <li>
          <LinkTertiary link='/'>Accueil</LinkTertiary>
        </li>
        <li>
          <LinkTertiary link='/projets'>Projets</LinkTertiary>
        </li>
        <li>
          <LinkTertiary link='/contact'>Contact</LinkTertiary>
        </li>
        <li>
          <LinkTertiary link='/login'>Connexion</LinkTertiary>
        </li>
        <li>
          <LinkTertiary link='/conditions-generales'>
            Conditions générales
          </LinkTertiary>
        </li>
      </ul>
    </nav>
  )
}
