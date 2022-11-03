import { TextInfoModel } from '@atoms/text-info-model/text-info-model'
import { store } from '@store/store'
import React from 'react'

export function ProfilUserInfo() {
  const userCurrent = store.user.useUserCurrent()

  return (
    <section>
      <TextInfoModel addClass='text-high'>
        {userCurrent.id ? userCurrent.name : ''}
      </TextInfoModel>
      <TextInfoModel>{userCurrent.id ? userCurrent.email : ''}</TextInfoModel>
      <TextInfoModel>
        <span>Votre niveau est </span>
        <span className='text-high'>
          {userCurrent.role ? userCurrent.role.libelle : ''}
        </span>
      </TextInfoModel>
    </section>
  )
}
