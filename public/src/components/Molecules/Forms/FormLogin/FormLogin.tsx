import { useNavigate } from '@solidjs/router'
import { Component, createEffect, createSignal, onCleanup } from 'solid-js'
import { authAction } from '../../../../store/auth/auth.action'
import { authResource } from '../../../../store/auth/auth.resource'
import { authStore } from '../../../../store/auth/auth.store'
import { EinputType } from '../../../../types/Input.type'
import { LinkForgotPassword } from '../../../Atoms/Links/LinkForgotPassword/LinkForgotPassword'
import { TextError } from '../../../Atoms/Texts/TextError/TextError'
import { BtnForm } from '../../Btns/BtnForm/BtnForm'
import { InputFull } from '../../Inputs/InputFull/InputFull'

export const FormLogin: Component<{}> = props => {
  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')
  const navigate = useNavigate()

  onCleanup(() => {
    // clear error message in authStore
    authAction.resetError()
  })

  createEffect(() => {
    if (authStore.token !== '') {
      navigate('/dashboard', { replace: true })
    }
  })

  // connexion user
  const connexionUser = async (e: Event) => {
    e.preventDefault()
    await authResource.login(email(), password())
  }

  return (
    <form onsubmit={connexionUser}>
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
        addClass='text-right mt-2 mb-4'
      />

      {/* error for login */}
      <TextError text={authStore.error} />

      {/* btn form */}
      <div class='flex justify-end mt-4'>
        <BtnForm loading={authStore.loading}>Se connecter</BtnForm>
      </div>
    </form>
  )
}
