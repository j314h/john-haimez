import { BtnSecondary } from '@atoms/btns/btn-secondary/btn-secondary'
import { SpinnerCircle } from '@atoms/spinners/spinner-circle/spinner-circle'
import { store } from '@store/store'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbtnLogout } from './btn-logout.type'

export function BtnLogout({ children }: TbtnLogout) {
  // hook
  const navigate = useNavigate()
  const loader = store.user.useLogoutLoader()

  /**
   * disconnect user current
   */
  const handlerDisconnect = async () => {
    await store.user.logout()
    store.app.menuUserAvatarActivateSetFalse()
    navigate('/login')
  }

  return (
    <BtnSecondary
      addClass='w-full text-left'
      textColor='text-red-500'
      click={handlerDisconnect}>
      {loader ? <SpinnerCircle size='w-4 h-4 md:w-4 md:h-4 mr-2' /> : <div />}
      <span>{children}</span>
    </BtnSecondary>
  )
}
