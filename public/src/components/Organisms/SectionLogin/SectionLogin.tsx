import { Component } from 'solid-js'
import { EcontainerType } from '../../../types/Container.type'
import { ContainerPrimary } from '../../Atoms/Containers/ContainerPrimary/ContainerPrimary'
import { FormLogin } from '../../Molecules/Forms/FormLogin/FormLogin'

export const SectionLogin: Component<{}> = props => {
  return (
    <ContainerPrimary
      typeOfContainer={EcontainerType.M}
      addClass='mx-auto mt-12'>
      {/* form login */}
      <FormLogin />
    </ContainerPrimary>
  )
}
