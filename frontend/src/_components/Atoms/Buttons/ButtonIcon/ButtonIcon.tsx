import React from 'react'
import { TbuttonIcon } from '../../../../types'
import './ButtonIcon.css'

export function ButtonIcon({
  children,
  colorIcon,
  colorButton,
  click,
}: TbuttonIcon) {
  return (
    <button
      className={`button-icon ${colorIcon} ${colorButton}`}
      onClick={click}
      type='button'>
      {children}
    </button>
  )
}
