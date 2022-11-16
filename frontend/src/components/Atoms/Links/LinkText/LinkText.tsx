import React from 'react'
import { NavLink } from 'react-router-dom'
import { TlinkText } from '../../../../types/LinkType'
import { ChevronRightIcon } from '../../Icons/ChevronRightIcon'
import './LinkText.css'

export function LinkText({
  link,
  children,
  sizeArrow,
  arrowD = false,
}: TlinkText) {
  return (
    <NavLink
      className={`${
        arrowD ? `link-text inline-flex items-center` : `link-text`
      }`}
      to={link}
      end>
      <span>{children}</span>
      {arrowD ? (
        <div className='-mb-1'>
          <ChevronRightIcon size={sizeArrow ?? 'w-4 h-4'} />
        </div>
      ) : null}
    </NavLink>
  )
}
