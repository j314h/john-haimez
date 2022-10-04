/**
 * type of btn text primary
 */
export type TbtnPrimary = {
  children: JSX.Element | JSX.Element[] | string | string[]
  click?: (() => void) | undefined
  submit?: boolean | undefined
  addClass?: string | undefined
  textColor?: string | undefined
}
