import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { store } from '@store/store'
import React from 'react'

export function BtnUserAvatar() {
  const stateMenuAvatar = store.app.useMenuUserAvatarActivate()

  const handlerClickBtnIcon = () => {
    store.app.switchMenuUserAvatarActivate(stateMenuAvatar)
    store.app.menuPrimaryMobileActivateSetFalse()
  }

  return (
    <BtnIconPrimary click={handlerClickBtnIcon}>
      {stateMenuAvatar ? (
        <CrossIcon size='w-7 h-7' color='text-error' />
      ) : (
        <img
          width='28px'
          height='28px'
          src='https://ui-avatars.com/api/?bold=true&rounded=true&uppercase=true&name=A&font-size=0.5&background=19A7FF&color=ffffff'
        />
      )}
    </BtnIconPrimary>
  )
}
