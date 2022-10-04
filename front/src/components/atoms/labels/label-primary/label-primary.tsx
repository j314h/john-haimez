import React from 'react'
import { TlabelPrimary } from './label-primary.type'
import './label-primary.css'

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
export function LabelPrimary({ children, name }: TlabelPrimary) {
  return (
    <label htmlFor={name} className='label-primary'>
      {children}
    </label>
  )
}
