import { Tlink } from '@types-app/link.type'
import React from 'react'
import { NavLink } from 'react-router-dom'

const classBasic = `
flex items-center
font-styling
text-3xl
md:text-4xl
md:pl-2
`

const classNoActive = `
hover:text-action
`

const classActive = `
text-high
`

/**
 * link brand
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param link string;
 * @param click? (() => void) | undefined;
 * @param addClass? string | undefined;
 * @returns
 */
export function LinkBrand({ children, link, addClass, click }: Tlink) {
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
