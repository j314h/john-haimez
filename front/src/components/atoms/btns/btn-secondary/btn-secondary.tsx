import React from 'react'
import { TbtnSecondary } from './btn-secondary.type'
import './btn-secondary.css'

export function BtnSecondary({
  children,
  addClass,
  submit,
  textColor,
  click,
}: TbtnSecondary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
        btn-secondary-app
        ${addClass}
        ${textColor}
    `}>
      {children}
    </button>
  )
}
