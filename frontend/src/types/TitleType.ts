/**
 * enum for all title primary
 */
export enum EtitlePrimary {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

/**
 * type for all title primary
 */
export type TtitlePrimary = {
  children: JSX.Element | string | undefined
  addClass?: string
  typeTitlePrimary: EtitlePrimary
}
