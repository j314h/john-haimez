import { Tbtn } from '@types-app/btn.type'
import React from 'react'

/**
 * btn text secondary
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param addClass? string | undefined;
 * @param click? (() => void) | undefined;
 * @param submit? boolean | undefined;
 * @param textColor? string | undefined;
 * @returns
 */
export function BtnTextSecondary({
  children,
  addClass,
  click,
  submit,
  textColor,
}: Tbtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
        ${addClass}
        ${textColor}
        flex items-center
        py-2 px-2 pl-4
        md:px-4
        rounded-full
        hover:bg-action-bg-hover
        dark:hover:bg-action-bg-dark-hover
      `}>
      {children}
    </button>
  )
}
