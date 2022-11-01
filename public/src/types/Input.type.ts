import { Setter } from 'solid-js'

/**
 * enum for type of input full
 */
export enum EinputType {
  PASSWORD = 'password',
  ID = 'id',
  RESET = 'reset',
  BASIC = 'basic',
}

/**
 * interface for input atom
 */
export interface Iinput {
  padding?: string
  type?: string
  placeholder?: string
  name?: string
  required?: boolean
  disabled?: boolean
  id?: string
  value?: string
  setValue: Setter<String>
}

/**
 * interface for input full
 */
export interface IinputFull {
  typeOfInput?: EinputType
  type?: string
  placeholder?: string
  name?: string
  required?: boolean
  disabled?: boolean
  id?: string
  addClass?: string
  value?: string
  setValue: Setter<String>
}
