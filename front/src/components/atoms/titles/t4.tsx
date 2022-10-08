import { Ttitle } from './title.type'
import React from 'react'

/**
 * title h4
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @returns
 */
export function T4({ children, color, addClass }: Ttitle) {
  return (
    <h4
      className={`
      text-thin 
      ${color} ${addClass} 
      md:text-normal lg:text-bold 
      text-xl md:text-xl lg:text-2xl`}>
      {children}
    </h4>
  )
}
