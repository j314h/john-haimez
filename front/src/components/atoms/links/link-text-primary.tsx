import React from 'react'
import { Tlink } from '@types-app/link.type'
import { NavLink } from 'react-router-dom'

const classBasic = `
flex items-center
py-2 px-2 pl-4
rounded-full
text-lg
md:w-fit
md:bg-transparent
md:hover:bg-transparent
md:uppercase
md:font-medium
md:pl-2 md:py-4 md:px-6
`

const classNoActive = `
hover:bg-action-bg-hover
hover:text-action
`

const classActive = `
text-white
md:text-high
bg-high
md:bg-transparent
`

/**
 * link text primary
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param link string;
 * @param click? (() => void) | undefined;
 * @param addClass? string | undefined;
 * @returns
 */
export function LinkTextPrimary({ children, link, click, addClass }: Tlink) {
  return (
    <NavLink
      to={link}
      onClick={click}
      end
      className={({ isActive }) =>
        isActive
          ? `${addClass} ${classBasic} ${classActive}`
          : `${addClass} ${classBasic} ${classNoActive}`
      }>
      {children}
    </NavLink>
  )
}
