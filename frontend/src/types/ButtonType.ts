/**
 * type for button primary
 */
export type TbuttonPrimary = {
  children: JSX.Element | string | null
  typeButton?: 'button' | 'submit' | 'reset' | undefined
  click?: () => void
}

/**
 * type for button form
 */
export type TbuttonForm = {
  text: string
  click?: () => void
  loadActive: boolean
}

/**
 * type for button icon
 */
export type TbuttonIcon = {
  children: JSX.Element | JSX.Element[] | string | null
  addClass?: string
  colorIcon?: string
  colorButton?: string
  click?: () => void
}

/**
 * type for button icon add
 */
export type TbuttonIconAdd = {
  click?: () => void
  colorIcon?: string
  colorButton?: string
  sizeIcon?: string
}

/**
 * type for button icon close
 */
export type TbuttonIconClose = {
  click?: () => void
  colorIcon?: string
  colorButton?: string
  sizeIcon?: string
}

/**
 * type for button icon delete
 */
export type TbuttonIconDelete = {
  click?: () => void
  colorIcon?: string
  colorButton?: string
  sizeIcon?: string
}

/**
 * type for button icon eye password
 */
export type TbuttonIconEyePassword = {
  click: () => void
  colorIcon?: string
  colorButton?: string
  sizeIcon?: string
  open: boolean
}

/**
 * type for button icon reset input
 */
export type TbuttonIconResetInput = {
  click: () => void
  colorIcon?: string
  colorButton?: string
  sizeIcon?: string
  seeOrNot: boolean
}

/**
 * type for button menu avatar
 */
export type TbuttonMenuAvatar = {
  open: boolean
  click?: () => void
}

/**
 * type for button mode dark
 */
export type TbuttonModeDark = {
  addClass?: string
}

/**
 * type button menu mobile
 */
export type TbuttonMenuMobile = {
  addClass?: string
}
