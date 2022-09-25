import { Ttitle } from '@types-app/title.type'
import React from 'react'

/**
 * title h5
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @returns
 */
export function T5({ children }: Ttitle) {
  return (
    <h5 className='text-thin md:text-normal lg:text-bold text-lg md:text-lg lg:text-xl'>
      {children}
    </h5>
  )
}
