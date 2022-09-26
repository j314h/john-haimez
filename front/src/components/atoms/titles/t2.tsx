import { Ttitle } from '@types-app/title.type'
import React from 'react'

/**
 * title h2
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @param color? string;
 * @returns
 */
export function T2({ children, color, addClass }: Ttitle) {
  return (
    <h2
      className={`font-styling ${color} text-2xl md:text-3xl lg:text-4xl ${addClass}`}>
      {children}
    </h2>
  )
}
