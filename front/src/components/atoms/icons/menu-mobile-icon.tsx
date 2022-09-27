import { Ticon } from '@types-app/icon.type'
import React from 'react'

/**
 * Menu Mobile
 * @param size? string | undefined;
 * @param color? string | null | undefined;
 * @returns
 */
export function MenuMobileIcon({ color, size }: Ticon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={`${color} ${size ?? 'w-6 h-6'}`}>
      <path
        fillRule='evenodd'
        d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
        clipRule='evenodd'
      />
    </svg>
  )
}
