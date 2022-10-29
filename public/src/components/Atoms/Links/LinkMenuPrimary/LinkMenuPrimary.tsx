import { A } from '@solidjs/router'
import { Component } from 'solid-js'
import { IlinkComponent } from '../../../../types/Link.type'
import './LinkMenuPrimary.css'

export const LinkMenuPrimary: Component<IlinkComponent> = props => {
  return (
    <A
      class='link-menu-primary'
      activeClass='link-menu-primary-active'
      inactiveClass='link-menu-primary-inactive'
      href={props.link}>
      {props.text}
    </A>
  )
}
