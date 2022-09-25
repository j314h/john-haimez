import { Tlink } from '@types-app/link.type'
import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * link text 3
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @param link string;
 * @param click? (() => void) | undefined;
 * @param addClass? string | undefined;
 * @returns
 */
export function LinkText({ children, link, addClass, click }: Tlink) {
  return (
    <NavLink
      to={link}
      onClick={click}
      className={`
      ${addClass}
      flex items-center justify-center
      text-action
      hover:underline
      `}>
      {children}
    </NavLink>
  )
}
