import { A } from '@solidjs/router'
import { Component } from 'solid-js'
import { IlinkComponent } from '../../../../types/Link.type'
import './LinkForgotPassword.css'

export const LinkForgotPassword: Component<IlinkComponent> = props => {
  return (
    <A class={`link-forgot-password ${props.addClass}`} href={props.link}>
      {props.text}
    </A>
  )
}
