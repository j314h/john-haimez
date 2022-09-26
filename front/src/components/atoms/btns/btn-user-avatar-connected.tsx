import { Tbtn } from '@types-app/btn.type'
import React from 'react'

/**
 * btn for avatar menu or current user
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @param click? (() => void) | undefined;
 * @param addClass? string | undefined;
 * @param padding? string | undefined;
 * @param submit? boolean | undefined;
 * @param textColor? string | undefined;
 * @returns
 */
export function BtnUserAvatarConnected({
  children,
  click,
  addClass,
  padding,
  submit,
  textColor,
}: Tbtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={click}
      className={`
      ${addClass}
      ${padding ?? 'py-2 px-2.5'}
      ${textColor ?? 'bg-fond2_claire dark:bg-fond2_dark hover:text-action'}
      rounded-full
      uppercase
      text-xl font-bold
      md:text-2xl
      `}>
      <span className='leading-none'>{children}</span>
    </button>
  )
}
