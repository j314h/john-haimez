import React from 'react'
import { Ticon } from '../../../types/IconType'

/**
 * Dashboard
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
export function DashboardIcon({ color, size }: Ticon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={`${color} ${size ?? 'w-6 h-6'}`}>
      <path
        fillRule='evenodd'
        d='M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z'
        clipRule='evenodd'
      />
    </svg>
  )
}
