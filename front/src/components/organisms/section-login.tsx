import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'
import { T2 } from '@atoms/titles/t2'
import { FormLogin } from '@molecules/form-login'
import React from 'react'

export function SectionLogin() {
  return (
    <ContainerPrimary model={EmodelContainer.m} addClass='mx-auto'>
      {/* title */}
      <T2 addClass='text-center mb-4 sm:mb-6 md:mb-8' color='text-high'>
        Connexion
      </T2>

      {/* form login */}
      <FormLogin />
    </ContainerPrimary>
  )
}
