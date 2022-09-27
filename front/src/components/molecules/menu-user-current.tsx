import React from 'react'
import { LinkTextSecondary } from '@atoms/links/link-text-secondary'
import { BtnLogout } from './btn-logout'
import Container from '@atoms/containers/container'
import { EmodelContainer } from '@types-app/container.type'
import { Divisor } from '@atoms/divisors/divisor'
import { BtnUserAvatar } from './btn-user-avatar'
import { InfoUserMenuAvatar } from './info-user-menu-avatar'
import { store } from '@store/store'

export default function MenuUserCurrent() {
  const stateMenuUserAvatar = store.app.useMenuUserAvatarActivate()

  return (
    <section className='relative ml-2'>
      {/* btn menu user avatar */}
      <BtnUserAvatar />

      {/* menu float */}
      <div
        className={`absolute top-14 -right-6 sm:right-0 z-50 ${
          stateMenuUserAvatar ? '' : 'hidden'
        }`}>
        <Container model={EmodelContainer.fit}>
          {/* info user */}
          <InfoUserMenuAvatar />

          <Divisor marginY='mt-6 mb-2' />

          {/* nav menu avatar user */}
          <nav className='pt-2'>
            <ul>
              {/* go to dashboard */}
              <li>
                <LinkTextSecondary
                  addClass='mb-3'
                  link='/dashboard'
                  click={store.app.menuUserAvatarActivateSetFalse}>
                  Tableau de bord
                </LinkTextSecondary>
              </li>

              {/* got to login and diconnect user */}
              <li>
                <BtnLogout>Se déconnecter</BtnLogout>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </section>
  )
}
