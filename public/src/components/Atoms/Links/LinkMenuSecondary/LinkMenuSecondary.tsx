import { A } from '@solidjs/router'
import { Component } from 'solid-js'
import { IlinkComponent } from '../../../../types/Link.type'
import './LinkMenuSecondary.css'

export const LinkMenuSecondary: Component<IlinkComponent> = props => {
  return (
    <A
      class='link-menu-secondary'
      activeClass='link-menu-secondary-active'
      inactiveClass='link-menu-secondary-inactive'
      href={props.link}
      end>
      {props.text}
    </A>
  )
}
