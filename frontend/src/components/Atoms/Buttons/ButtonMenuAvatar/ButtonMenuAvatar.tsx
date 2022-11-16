import React from 'react'
import { TbuttonMenuAvatar } from '../../../../types/ButtonType'
import { CrossIcon } from '../../Icons/CrossIcon'
import './ButtonMenuAvatar.css'

export function ButtonMenuAvatar({ open, click }: TbuttonMenuAvatar) {
  const initial = 'JH'

  return (
    <button
      onClick={click}
      className={open ? 'button-menu-avatar-active' : 'button-menu-avatar'}>
      {open ? (
        <CrossIcon />
      ) : (
        <p className='w-6 h-6 font-medium leading-[24px]'>{initial}</p>
      )}
    </button>
  )
}
