import { Tbtn } from '@types-app/btn.type'
import React from 'react'

/**
 * btn text 2
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
        flex items-center justify-center
        px-2 pb-1
        md:px-4
        text-base
        leading-1
        rounded-full
        hover:bg-action-bg-hover
        dark:hover:bg-action-bg-dark-hover
      `}>
      {children}
    </button>
  )
}
