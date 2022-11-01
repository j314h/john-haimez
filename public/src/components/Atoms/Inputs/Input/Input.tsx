import { Component } from 'solid-js'
import { Iinput } from '../../../../types/Input.type'
import './Input.css'

export const Input: Component<Iinput> = props => {
  return (
    <input
      type={props.type ?? 'text'}
      placeholder={props.placeholder ?? 'Placeholder'}
      name={props.name}
      id={props.id}
      required={props.required ?? false}
      disabled={props.disabled ?? false}
      value={props.value}
      class={`input-atom ${props.padding ?? 'pl-4 pr-4'}`}
      onInput={(e: { target: any }) => props.setValue(e.target.value)}
    />
  )
}
