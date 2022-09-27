import Container from '@atoms/containers/container'
import { T2 } from '@atoms/titles/t2'
import { FormLogin } from '@molecules/form-login'
import { EmodelContainer } from '@types-app/container.type'
import React from 'react'

export function SectionLogin() {
  return (
    <Container model={EmodelContainer.m} addClass='mx-auto'>
      {/* title */}
      <T2 addClass='text-center mb-4 sm:mb-6 md:mb-8' color='text-high'>
        Connexion
      </T2>

      {/* form login */}
      <FormLogin />
    </Container>
  )
}
