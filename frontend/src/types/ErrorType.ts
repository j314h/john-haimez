/**
 * type for component error text
 */
export type TerrorText = {
  text?: string
  addClassDiv?: string
  addClass?: string
  sizeText?: string
}

/**
 * interface for error of all app
 */
export interface IerrorApp {
  active?: boolean
  message?: string | null
}
