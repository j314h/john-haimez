import React from 'react'
import { BtnLogout } from './btn-logout/btn-logout'
import { Divisor } from '@atoms/divisors/divisor'
import { BtnUserAvatar } from './btn-user-avatar'
import { InfoUserMenuAvatar } from './info-user-menu-avatar'
import { store } from '@store/store'
import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EdivisorSize } from '@atoms/divisors/divisor.type'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { ElinkModel } from '@atoms/links/link-primary/link-primary.type'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'

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
        <ContainerPrimary model={EmodelContainer.fit}>
          {/* info user */}
          <InfoUserMenuAvatar />

          <Divisor sizeModel={EdivisorSize.L} />

          {/* nav menu avatar user */}
          <nav>
            <ul>
              {/* go to dashboard */}
              <li>
                <LinkPrimary
                  model={ElinkModel.SEC}
                  addClass='mb-3'
                  link='/dashboard'
                  click={store.app.menuUserAvatarActivateSetFalse}>
                  Tableau de bord
                </LinkPrimary>
              </li>

              {/* got to login and diconnect user */}
              <li>
                <BtnLogout>Se déconnecter</BtnLogout>
              </li>
            </ul>
          </nav>
        </ContainerPrimary>
      </div>
    </section>
  )
}
