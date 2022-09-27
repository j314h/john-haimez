import { Ticon } from '@types-app/icon.type'
import React from 'react'

/**
 * AddIcon
 * @param size? string | undefined;
 * @param color? string | null | undefined;
 * @returns
 */
export function AddIcon({ color, size }: Ticon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={`${color} ${size ?? 'w-6 h-6'}`}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}
