import React from 'react'
import './ButtonIcon.css'
import { TbuttonIcon } from '../../../../types/ButtonType'

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
