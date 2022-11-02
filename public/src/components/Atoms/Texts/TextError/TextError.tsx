import { Component } from 'solid-js'
import { ItextError } from '../../../../types/Text.type'

export const TextError: Component<ItextError> = props => {
  return <p class='text-s2 h-6 text-error font-medium'>{props.text}</p>
}
