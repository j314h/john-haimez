import { Ttitle } from './title.type'
import React from 'react'

/**
 * title h3
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @returns
 */
export function T3({ children, color, addClass }: Ttitle) {
  return (
    <h3
      className={`font-styling ${color} ${addClass} text-xl md:text-2xl lg:text-3xl`}>
      {children}
    </h3>
  )
}
