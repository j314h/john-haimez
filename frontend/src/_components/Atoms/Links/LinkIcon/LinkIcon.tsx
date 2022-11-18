import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkIcon } from '../../../../types'
import './LinkIcon.css'

export function LinkIcon({ children, link }: TlinkIcon) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `link-icon-app link-icon-app-active`
          : `link-icon-app link-icon-app-noactive`
      }
      to={link}
      end>
      {children}
    </NavLink>
  )
}
