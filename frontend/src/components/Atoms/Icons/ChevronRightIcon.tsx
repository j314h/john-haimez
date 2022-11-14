import { Ticon } from '../../../types/IconType'
import React from 'react'

/**
 * Chevron right
 * @param size? string | undefined;
 * @param color? string | null | undefined;
 * @returns
 */
export function ChevronRightIcon({ color, size }: Ticon) {
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
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  )
}
