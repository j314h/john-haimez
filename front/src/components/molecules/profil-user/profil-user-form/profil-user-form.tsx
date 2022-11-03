import { T5 } from '@atoms/titles/t5'
import { BtnForm } from '@molecules/btn-form/btn-form'
import { InputFull } from '@molecules/input-full/input-full'
import { store } from '@store/store'
import React from 'react'

export function ProfilUserForm() {
  const {
    valueName,
    valueEmail,
    setValueEmail,
    setValueName,
    loadingUpdateInfo,
  } = store.profilUser.useFormProfilUserInfo()

  const {
    confirmNewPassword,
    newPassword,
    password,
    setconfirmNewPassword,
    setnewPassword,
    setpassword,
  } = store.profilUser.useFormProfilUserPassword()

  // update info profil user current
  const handlerUpdateProfilUserInfo = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await store.profilUser.updateProfilUserInfo({
      name: valueName,
      email: valueEmail,
    })
    if (res) {
      store.profilUser.closeDisplayForm()
    }
  }

  // update password user current
  const handlerUpdateProfilUserPassword = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section>
      {/* form profil user info */}
      <section>
        <T5 addClass='mb-4'>Modifier vos infos</T5>
        <form onSubmit={handlerUpdateProfilUserInfo}>
          {/* input name */}
          <InputFull
            name='name'
            value={valueName}
            setValueInput={setValueName}
            addClass='mb-4'
            placeholder='Votre nom'
            required
          />

          {/* input email */}
          <InputFull
            name='email'
            value={valueEmail}
            setValueInput={setValueEmail}
            placeholder='Votre email'
            required
          />

          {/* btn form profil user info */}
          <div className='flex justify-end mt-8'>
            <BtnForm loading={loadingUpdateInfo}>Modifier mes infos</BtnForm>
          </div>
        </form>
      </section>

      {/* form profil user password */}
      <section className='mt-12'>
        <T5 color='text-warning'>Modifier votre mot de passe</T5>
        <form onSubmit={handlerUpdateProfilUserPassword} className='mt-4'>
          {/* input password */}
          <InputFull
            value={password}
            setValueInput={setpassword}
            type='password'
            placeholder='Votre mot de passe'
            required
            addClass='mb-4'
          />

          {/* input new password */}
          <InputFull
            value={newPassword}
            setValueInput={setnewPassword}
            type='password'
            placeholder='Votre nouveau mot de passe'
            required
            addClass='mb-4'
          />

          {/* input confirm new password */}
          <InputFull
            value={confirmNewPassword}
            setValueInput={setconfirmNewPassword}
            type='password'
            placeholder='Confirmer le nouveau mot de passe'
            required
          />

          {/* btn sub */}
          <div className='flex justify-end mt-8'>
            <BtnForm>Modifier mon mot de passe</BtnForm>
          </div>
        </form>
      </section>
    </section>
  )
}
