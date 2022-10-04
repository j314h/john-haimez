/**
 * type of btn icon primary
 */
export type TbtnIconPrimary = {
  children: JSX.Element | JSX.Element[] | string
  submit?: boolean
  textColorHover?: string
  addClass?: string
  inputFull?: boolean
  click?: () => void
}
