import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkSecondary } from '../../../../types'
import './LinkSecondary.css'

export function LinkSecondary({ children, link, textSize }: TlinkSecondary) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `link-secondary-app ${textSize ?? ''} link-secondary-active`
          : `link-secondary-app ${textSize ?? ''} link-secondary-noactive`
      }
      to={link}
      end>
      {children}
    </NavLink>
  )
}
