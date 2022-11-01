import { JSX } from 'solid-js'

/**
 * interface for all btn component
 */
export interface IbtnComponent {
  children?: JSX.Element | JSX.Element[] | string
  text?: string
  func?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  addClass?: string
}

/**
 * interface for btn menu mobile
 */
export interface IbtnMenuMobile {
  active?: boolean
}
