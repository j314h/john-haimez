import React from 'react'
import { Tcopyright } from './copyright.type'
import './copyright.css'

/**
 * juste copyright of footer
 * @param children: string | JSX.Element | JSX.Element[]
 * @returns
 */
export function Copyright({ children }: Tcopyright) {
  return <p className='copyright'>{children}</p>
}
