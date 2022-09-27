import React from 'react'
import { LinkTextSecondary } from '@atoms/links/link-text-secondary'
import { BtnLogout } from './btn-logout'
import Container from '@atoms/containers/container'
import { EmodelContainer } from '@types-app/container.type'
import { Divisor } from '@atoms/divisors/divisor'
import { BtnUserAvatar } from './btn-user-avatar'
import { InfoUserMenuAvatar } from './info-user-menu-avatar'

export default function MenuUserCurrent() {
  return (
    <section className='relative ml-2'>
      {/* btn menu user avatar */}
      <BtnUserAvatar />

      {/* menu float */}
      <div className='absolute top-14 right-0 z-50'>
        <Container model={EmodelContainer.fit}>
          {/* info user */}
          <InfoUserMenuAvatar />

          <Divisor marginY='mt-6 mb-2' />

          {/* nav menu avatar user */}
          <nav className='pt-2'>
            <ul>
              {/* go to dashboard */}
              <li>
                <LinkTextSecondary link='/dashboard'>
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
