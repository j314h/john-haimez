import React from 'react'
import { NavLink } from 'react-router-dom'
import { ElinkModel, TlinkPrimary } from './link-primary.type'
import './link-primary.css'

export function LinkPrimary({
  children,
  link,
  click,
  model,
  addClass,
}: TlinkPrimary) {
  function choiceTypeLink(activate: boolean) {
    if (activate) {
      switch (model) {
        case ElinkModel.BASIC:
          return 'link-basic-active'
        case ElinkModel.BRAND:
          return 'link-brand-active'
        case ElinkModel.ICON:
          return 'link-icon-active'
        case ElinkModel.PRI:
          return 'link-primary-active'
        case ElinkModel.SEC:
          return 'link-secondary-active'
        case ElinkModel.TER:
          return 'link-tertiary-active'
        default:
          break
      }
    } else {
      switch (model) {
        case ElinkModel.BASIC:
          return 'link-basic'
        case ElinkModel.BRAND:
          return 'link-brand'
        case ElinkModel.ICON:
          return 'link-icon'
        case ElinkModel.PRI:
          return 'link-primary-app'
        case ElinkModel.SEC:
          return 'link-secondary-app'
        case ElinkModel.TER:
          return 'link-tertiary'
        default:
          break
      }
    }
  }
  return (
    <NavLink
      to={link}
      end
      onClick={click}
      className={({ isActive }) => `${addClass} ${choiceTypeLink(isActive)}`}>
      {children}
    </NavLink>
  )
}
