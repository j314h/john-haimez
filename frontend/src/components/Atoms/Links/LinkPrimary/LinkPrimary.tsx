import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkPrimary } from '../../../../types/LinkType'
import './LinkPrimary.css'

export function LinkPrimary({ children, link, textSize }: TlinkPrimary) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `link-primary-app ${textSize ?? ''} link-primary-active`
          : `link-primary-app ${textSize ?? ''} link-primary-noactive`
      }
      to={link}
      end>
      {children}
    </NavLink>
  )
}
