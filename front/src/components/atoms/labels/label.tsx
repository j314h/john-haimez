import type { Tlabel } from '@types-app/label.type'
import React from 'react'

/**
 * label
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param name?: string | undefined;
 * @param classDefault?: string | undefined;
 * @param addClass?: string | undefined;
 * @param colors?: string | undefined;
 * @param size?: string | undefined;
 * @returns
 */
export function Label({
  children,
  name,
  classDefault,
  addClass,
  colors,
  size,
}: Tlabel) {
  return (
    <label
      htmlFor={name}
      className={`
        ${classDefault ?? 'block font-medium mb-2'} 
        ${addClass}
        ${colors}
        ${size ?? 'text-sm md:text-lg'}
      `}>
      {children}
    </label>
  )
}
