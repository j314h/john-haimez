import { Tdivisor } from '@types-app/divisor.type'
import React from 'react'

/**
 * divisor
 * @param color defaultProps string;
 * @param marginY defaultProps string;
 * @returns
 */
export function Divisor({ color, marginY }: Tdivisor) {
  return (
    <div
      className={`h-0.5 
        ${marginY ?? 'mt-2 mb-2'} mx-auto 
        ${color ?? 'bg-divisor-bg'} w-11/12`}
    />
  )
}
