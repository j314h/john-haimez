import { Component, createEffect, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { EcontainerType } from '../../../../types/Container.type'
import { EinputType } from '../../../../types/Input.type'
import { BtnPrimary } from '../../../Atoms/Btns/BtnPrimary/BtnPrimary'
import { ContainerPrimary } from '../../../Atoms/Containers/ContainerPrimary/ContainerPrimary'
import { LinkForgotPassword } from '../../../Atoms/Links/LinkForgotPassword/LinkForgotPassword'
import { InputFull } from '../../Inputs/InputFull/InputFull'

export const FormLogin: Component<{}> = props => {
  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')

  return (
    <ContainerPrimary
      typeOfContainer={EcontainerType.M}
      addClass='mx-auto mt-12'>
      <form>
        {/* input email */}
        <InputFull
          value={email()}
          setValue={setEmail}
          typeOfInput={EinputType.ID}
          placeholder='Identifiant'
          required
        />

        {/* input password */}
        <InputFull
          type='password'
          value={password()}
          setValue={setPassword}
          placeholder='Mot de passe'
          typeOfInput={EinputType.PASSWORD}
          required
          addClass='mt-4'
        />

        {/* link for forgot password */}
        <LinkForgotPassword
          link='/forgot-password'
          text='Mot de passe oublé ?'
          addClass='text-right mt-2 mb-8'
        />

        {/* btn form */}
        <div class='flex justify-end'>
          <BtnPrimary type='submit'>Se connecter</BtnPrimary>
        </div>
      </form>
    </ContainerPrimary>
  )
}
