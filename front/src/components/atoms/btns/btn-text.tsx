import React from 'react'
import { Tbtn } from '@types-app/btn.type'

/**
 * btn text
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param click? (() => void) | undefined
 * @param submit? boolean | undefined;
 * @param addClass? string | undefined;
 * @param textColor? string | undefined;
 * @returns
 */
export function BtnText({
  children,
  click,
  submit,
  addClass,
  textColor,
}: Tbtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
      ${addClass}
      ${textColor ?? 'text-white'}
      flex items-center justify-center
      px-3 py-1
      md:px-5 md:py-2
      text-base
      rounded-md
      leading-5
      bg-action
      hover:bg-action-hover
      `}>
      {children}
    </button>
  )
}
