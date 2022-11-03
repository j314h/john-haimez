import { Component } from 'solid-js'
import { IbtnComponent } from '../../../../types/Btn.type'
import './BtnIcon.css'

export const BtnIcon: Component<IbtnComponent> = props => {
  return (
    <button class='btn-icon' onClick={props.func}>
      {props.children}
    </button>
  )
}
