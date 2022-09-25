import { Ttitle } from '@types-app/title.type'
import React from 'react'

/**
 * title h1
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @returns
 */
export function T1({ children }: Ttitle) {
  return (
    <h1 className='font-styling text-2xl md:text-4xl lg:text-5xl'>
      {children}
    </h1>
  )
}
