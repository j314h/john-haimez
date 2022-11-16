/**
 * type for link primary
 */
export type TlinkPrimary = {
  children: JSX.Element | string | null
  link: string
  textSize?: string
}

/**
 * type for link secondary
 */
export type TlinkSecondary = {
  children: JSX.Element | string | null
  link: string
  textSize?: string
}

/**
 * type for link of brand
 */
export type TlinkBrand = {
  children: JSX.Element | string
  link?: string
}

/**
 * type for link icon
 */
export type TlinkIcon = {
  children: JSX.Element | string | null
  link: string
  textSize?: string
}
