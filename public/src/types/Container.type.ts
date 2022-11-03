import { JSX } from 'solid-js'

export enum EcontainerType {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XL2 = 'xl2',
}

export interface Icontainer {
  children: JSX.Element
  typeOfContainer: EcontainerType
  addClass?: string
}
