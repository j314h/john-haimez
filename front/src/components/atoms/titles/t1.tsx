import { Ttitle } from './title.type'
import React from 'react'

/**
 * title h1
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @returns
 */
export function T1({ children, color, addClass }: Ttitle) {
  return (
    <h1
      className={`font-styling ${color} ${addClass} text-2xl md:text-4xl lg:text-5xl`}>
      {children}
    </h1>
  )
}
