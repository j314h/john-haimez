import { ErrorText } from '@atoms/errors/error-text/error-text'
import { LockIcon } from '@atoms/icons/lock-icon'
import { UserIcon } from '@atoms/icons/user-icon'
import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { ElinkModel } from '@atoms/links/link-primary/link-primary.type'
import { store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BtnForm } from './btn-form/btn-form'
import { InputFull } from './input-full/input-full'

/**
 * form connexion user
 */
export function FormLogin() {
  // state for input
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  // hook
  const error = store.user.useLoginError()
  const loginLoader = store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await store.user.login(valueEmail, valuePassword)
    if (res) navigate('/dashboard')
  }

  return (
    <form onSubmit={handlerSubmit}>
      {/* input email */}
      <InputFull
        placeholder='Votre identifiant'
        value={valueEmail}
        setValueInput={setValueEmail}
        type='email'
        icon={<UserIcon />}
        addClass='mb-4'
        activeReset
        required
      />

      {/* input password */}
      <InputFull
        placeholder='Mot de passe'
        value={valuePassword}
        setValueInput={setValuePassword}
        type='password'
        icon={<LockIcon />}
        eye
        required
      />

      {/* link forgot password */}
      <div className='flex justify-end mt-2 mb-2'>
        <LinkPrimary
          model={ElinkModel.BASIC}
          addClass='text-xs'
          link='/forgot-password'>
          Mot de passe oublié
        </LinkPrimary>
      </div>

      {/* error text */}
      <ErrorText position='text-center sm:text-left'>{error}</ErrorText>

      {/* btn form */}
      <div className='flex justify-end mt-8'>
        <BtnForm loading={loginLoader}>Se connecter</BtnForm>
      </div>
    </form>
  )
}
