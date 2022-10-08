import React from 'react'
import { TbtnIconPrimary } from './btn-icon-primary.type'
import './btn-icon-primary.css'

/**
 * btn icon
 * @param children: JSX.Element | JSX.Element[] | string;
 * @param submit?: boolean | undefined;
 * @param textColorHover?: string | undefined;
 * @param addClass?: string | undefined;
 * @param inputFull?: boolean | undefined;
 * @param click?: (() => void) | undefined;
 * @returns
 */
export function BtnIconPrimary({
  children,
  submit,
  textColorHover,
  addClass,
  inputFull,
  click,
}: TbtnIconPrimary) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`
        ${inputFull ? 'btn-icon-primary-input-full' : 'btn-icon-primary'}
        ${addClass}
        ${textColorHover ?? 'hover:text-action'}
      `}
      onClick={click}>
      {children}
    </button>
  )
}
