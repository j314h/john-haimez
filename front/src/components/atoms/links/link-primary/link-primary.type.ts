/**
 * enum for model link
 */
export enum ElinkModel {
  BRAND = 'brand',
  ICON = 'icon',
  TER = 'tertiary',
  PRI = 'primary',
  SEC = 'secondary',
  BASIC = 'basic',
}

/**
 * type for all component
 */
export type TlinkPrimary = {
  children: JSX.Element | JSX.Element[] | string | string[]
  link: string
  click?: () => void
  addClass?: string
  model: ElinkModel
}
