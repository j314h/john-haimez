import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { T3 } from '@atoms/titles/t3'
import ProfilUserBtnAction from '@molecules/profil-user/profil-user-btn-action/profil-user-btn-action'
import { ProfilUserForm } from '@molecules/profil-user/profil-user-form/profil-user-form'
import { ProfilUserInfo } from '@molecules/profil-user/profil-user-info/profil-user-info'
import { store } from '@store/store'
import React from 'react'

export function SectionProfilUser() {
  const displayForm = store.profilUser.useDisplayForm()

  return (
    <ContainerPrimary addClass='mt-12 md:mt-0' model={EmodelContainer.m}>
      {/* btn action */}
      <ProfilUserBtnAction />

      {/* title */}
      <T3 color='text-high' addClass='mb-8'>
        Votre profil
      </T3>

      {/* profil user info or form profil user */}
      {displayForm ? <ProfilUserForm /> : <ProfilUserInfo />}
    </ContainerPrimary>
  )
}
