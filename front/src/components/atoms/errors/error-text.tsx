import { Terror } from '@types-app/error.type'
import React from 'react'

/**
 * error text sample for action user in inerface
 * @param param0 children?: string | JSX.Element | JSX.Element[] | string[] | undefined;
 * @returns
 */
export function ErrorText({ children, position }: Terror) {
  return (
    <div>
      {children !== '' ? (
        <p
          className={`text-xs text-red-500 ${
            position ?? 'text-center'
          } p-2 font-medium`}>
          {children}
        </p>
      ) : null}
    </div>
  )
}
