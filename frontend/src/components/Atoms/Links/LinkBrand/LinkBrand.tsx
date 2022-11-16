import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkBrand } from '../../../../types/LinkType'
import './LinkBrand.css'

export function LinkBrand({ children, link }: TlinkBrand) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `link-brand link-brand-active`
          : `link-brand link-brand-noactive`
      }
      to={link ?? '/'}
      end>
      <div className='font-styling text-s7 md:text-s9 w-fit'>{children}</div>
    </NavLink>
  )
}
