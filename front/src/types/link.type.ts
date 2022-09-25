import { TcomponentParent } from './component-parent.type'

/**
 * type for all component
 */
export type Tlink = TcomponentParent & {
  link: string
  click?: () => void
  addClass?: string
}

/**
 * type for link brand in header
 */
export type TlinkBrandHeader = {
  addClass?: string
}
