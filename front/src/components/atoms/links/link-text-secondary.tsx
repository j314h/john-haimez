import { Tlink } from '@types-app/link.type'
import React from 'react'
import { NavLink } from 'react-router-dom'

const classBasic = `
flex items-center
py-2 px-2 pl-4
rounded-full
`

const classNoActive = `
hover:bg-action-bg-hover
hover:text-action
`

const classActive = `
text-white
bg-high
`

/**
 * link text 2
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param link string;
 * @param click? (() => void) | undefined;
 * @param addClass? string | undefined;
 * @returns
 */
export function LinkTextSecondary({ children, link, addClass, click }: Tlink) {
  return (
    <NavLink
      to={link}
      end
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
