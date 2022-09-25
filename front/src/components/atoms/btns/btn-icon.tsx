import React from 'react';
import type { Tbtn } from '@types-app/btn.type';

export function BtnIcon({
  children,
  submit,
  addClass,
  hoverBg,
  padding,
  textColor,
  click,
}: Tbtn) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`
      ${addClass ?? ''} 
      ${padding ?? 'p-2'} 
      ${textColor ?? 'hover:text-action'} 
      ${hoverBg ?? 'hover:bg-action-bg-hover'} 
      flex items-center justify-center
      rounded-full
      hover:bg-action-bg-hover
      dark:hover:bg-action-bg-dark-hover
      `}
      onClick={click}>
      {children}
    </button>
  );
}
