import React from 'react'
import './error-text.css'
import { TerrorText } from './error.type'

/**
 * error text sample for action user in inerface
 * @param param0 children?: string | JSX.Element | JSX.Element[] | string[] | undefined;
 * @returns
 */
export function ErrorText({ children, position }: TerrorText) {
  return (
    <div>
      {children !== '' ? (
        <p className={`error-text ${position ?? 'text-center'}`}>{children}</p>
      ) : null}
    </div>
  )
}
