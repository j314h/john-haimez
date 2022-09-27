import { TcomponentParent } from './component-parent.type'

/**
 * type for all tooltip
 */
export type Ttooltip = TcomponentParent & {
  dataTip: string | null
  positionTip: string | null
}
