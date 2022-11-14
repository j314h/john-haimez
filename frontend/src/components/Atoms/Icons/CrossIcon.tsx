import React from 'react'
import { Ticon } from '../../../types/IconType'

/**
 * Cross
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
export function CrossIcon({ color, size }: Ticon) {
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
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
