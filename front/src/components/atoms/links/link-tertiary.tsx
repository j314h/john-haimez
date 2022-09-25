import React from 'react'
import { Tlink } from '@types-app/link.type'
import { NavLink } from 'react-router-dom'

const classBasic = `
flex items-center justify-center md:justify-end
py-2
`

const classNoActive = `
hover:text-action
`

const classActive = `
text-high
`

/**
 * link text 4
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param link string;
 * @param click? (() => void) | undefined;
 * @param addClass? string | undefined;
 * @returns
 */
export function LinkTertiary({ children, link, addClass, click }: Tlink) {
  return (
    <NavLink
      to={link}
      onClick={click}
      className={({ isActive }) =>
        isActive
          ? `${addClass} ${classBasic} ${classActive}`
          : `${addClass} ${classBasic} ${classNoActive}`
      }>
      {children}
    </NavLink>
  )
}
