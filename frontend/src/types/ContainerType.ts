/**
 * enum for type container primary
 */
export enum EcontainerPrimary {
  SMALLXL = 'small-xl',
  SMALL = 'small',
  MEDIUMXL = 'medium-xl',
  MEDIUM = 'medium',
  LARGEXL = 'large-xl',
  LARGE = 'large',
}

/**
 * type for container primary
 */
export type TcontainerPrimary = {
  children: JSX.Element | string | null | JSX.Element[]
  typeContainer: EcontainerPrimary
  addClass?: string
}
