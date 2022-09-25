/* eslint-disable no-unused-vars */
import { TcomponentParent } from './component-parent.type'

/**
 * enum for selected the model of container
 */
export enum EmodelContainer {
  fit = 'fit',
  xs = '2s',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = '2xl',
  xxxl = '3xl',
  xxxxl = '4xl',
  xxxxxl = '5xl',
  xxxxxxl = '6xl',
}

/**
 * type for all container
 */
export type Tcontainer = TcomponentParent & {
  addClass?: string
  model: EmodelContainer
}
