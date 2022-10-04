import React from 'react'
import './btn-primary.css'
import { TbtnPrimary } from './btn-primary.type'

export function BtnPrimary({
  children,
  submit,
  textColor,
  addClass,
  click,
}: TbtnPrimary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
        btn-primary-app
        ${addClass}
        ${textColor ?? 'text-white'}
        `}>
      {children}
    </button>
  )
}
