import { BtnTextSecondary } from '@atoms/btns/btn-text-secondary'
import { SpinnerCircle } from '@atoms/spinners/spinner-circle'
import { store } from '@store/store'
import { TcomponentParent } from '@types-app/component-parent.type'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function BtnLogout({ children }: TcomponentParent) {
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
    <BtnTextSecondary
      addClass='w-full text-red-500 text-left'
      click={handlerDisconnect}>
      {loader ? <SpinnerCircle size='w-4 h-4 md:w-4 md:h-4' /> : <div />}
      <span className={`${loader ? 'ml-2' : ''}`}>{children}</span>
    </BtnTextSecondary>
  )
}
