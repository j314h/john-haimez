/**
 * type for button icon
 */
export type TbuttonIcon = {
  children: JSX.Element | null
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
