import { Tlink } from '@types-app/link.type'
import React from 'react'
import { NavLink } from 'react-router-dom'

const classBasic = `
flex items-center
p-1
rounded-full
w-fit
`

const classNoActive = `
hover:bg-action-bg-hover
hover:text-action
`

const classActive = `
text-high
bg-transparent
`

/**
 * link icon
 * @param children JSX.Element | JSX.Element[] | string | string[];
 * @param Link string;
 * @param addClass? string | undefined;
 * @param click? (() => void) | undefined;
 * @returns
 */
export function LinkIcon({ children, link, addClass, click }: Tlink) {
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
