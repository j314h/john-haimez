import { TcomponentParent } from '@types-app/component-parent.type'
import React from 'react'

/**
 * juste copyright of footer
 * @param children: string | JSX.Element | JSX.Element[]
 * @returns
 */
export function Copyright({ children }: TcomponentParent) {
  return (
    <p className='pt-4 pb-2 font-thin text-xs text-center md:text-sm'>
      {children}
    </p>
  )
}
