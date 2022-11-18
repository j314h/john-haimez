import React from 'react'
import { TbuttonPrimary } from '../../../../types'
import './ButtonPrimary.css'

export function ButtonPrimary({ children, typeButton, click }: TbuttonPrimary) {
  return (
    <button
      onClick={click}
      className={`
        button-primary-app 
        bg-action 
        dark:bg-action-d
        hover:bg-action-h
        dark:hover:bg-action-dh
      `}
      type={typeButton ?? 'button'}>
      {children}
    </button>
  )
}
