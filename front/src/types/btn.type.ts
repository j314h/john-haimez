import type { TcomponentParent } from './component-parent.type'

/**
 * type of global btn
 */
export type Tbtn = TcomponentParent & {
  click?: () => void
  submit?: boolean
  addClass?: string
  textColor?: string
  padding?: string
  hoverBg?: string
}

/**
 * type for btn form
 */
export type TbtnForm = TcomponentParent & {
  loading?: boolean
}

/**
 * type for btn mobile
 */
export type TbtnMenuMobile = {
  hidden?: string
}

/**
 * type for btn user avatar
 */
export type TbtnUserAvatar = {
  open?: boolean
}
