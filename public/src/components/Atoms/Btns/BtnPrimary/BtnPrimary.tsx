import { Component } from 'solid-js'
import { IbtnComponent } from '../../../../types/Btn.type'
import './BtnPrimary.css'

export const BtnPrimary: Component<IbtnComponent> = props => {
  return (
    <button
      class={`btn-primary ${props.addClass}`}
      type={props.type ?? 'button'}>
      {props.children}
    </button>
  )
}
