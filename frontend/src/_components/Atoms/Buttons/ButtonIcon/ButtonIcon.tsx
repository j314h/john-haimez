import React from 'react'
import { TbuttonIcon } from '../../../../types'
import './ButtonIcon.css'

export function ButtonIcon({
  children,
  colorIcon,
  colorButton,
  addClass,
  click,
}: TbuttonIcon) {
  return (
    <button
      className={`button-icon ${colorIcon} ${colorButton} ${addClass}`}
      onClick={click}
      type='button'>
      {children}
    </button>
  )
}
