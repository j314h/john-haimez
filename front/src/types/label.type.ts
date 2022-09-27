import { TcomponentParent } from './component-parent.type'

/**
 * type for all label
 */
export type Tlabel = TcomponentParent & {
  name?: string
  classDefault?: string
  addClass?: string
  colors?: string
  size?: string
}
