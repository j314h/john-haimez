import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { ElinkModel } from '@atoms/links/link-primary/link-primary.type'
import { store } from '@store/store'
import React from 'react'

/**
 * nev menu secondary default in footer
 */
export function NavSecondary() {
  const { myRef } = store.outsideClick.useOutSideClick()
  const token = store.token.useTokenUserCurrent()

  return (
    <nav ref={myRef}>
      <ul>
        <li>
          <LinkPrimary model={ElinkModel.TER} link='/'>
            Accueil
          </LinkPrimary>
        </li>
        <li>
          <LinkPrimary model={ElinkModel.TER} link='/projects'>
            Projets
          </LinkPrimary>
        </li>
        <li>
          <LinkPrimary model={ElinkModel.TER} link='/contact'>
            Contact
          </LinkPrimary>
        </li>
        {token !== '' ? null : (
          <li>
            <LinkPrimary model={ElinkModel.TER} link='/login'>
              Connexion
            </LinkPrimary>
          </li>
        )}
        <li>
          <LinkPrimary model={ElinkModel.TER} link='/conditions-generales'>
            Conditions générales
          </LinkPrimary>
        </li>
      </ul>
    </nav>
  )
}
