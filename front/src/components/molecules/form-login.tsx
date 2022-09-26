import { LockIcon } from '@atoms/icons/lock-icon'
import { UserIcon } from '@atoms/icons/user-icon'
import { LinkText } from '@atoms/links/link-text'
import React, { useState } from 'react'
import { BtnForm } from './btn-form'
import InputFull from './input-full'

export function FormLogin() {
  // state for input
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  return (
    <form>
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
      <div className='flex justify-end mt-2 mb-8'>
        <LinkText addClass='text-xs' link='/forgot-password'>
          Mot de passe oublié
        </LinkText>
      </div>

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        <BtnForm>Se connecter</BtnForm>
      </div>
    </form>
  )
}
