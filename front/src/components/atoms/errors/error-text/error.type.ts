/**
 * type for error component
 */
export type TerrorText = {
  children?: JSX.Element | JSX.Element[] | string | string[]
  position?: string
}

/**
 * type error for observable error in model
 */
export type Terror = {
  message?: string
  nameInput?: string[]
}

/**
 * enum for string of error of all app
 */
export enum Eerror {
  LOGIN = 'Erreur de connexion',
  CREATE_SETTING = 'Impossible de créer ces réglages',
  UPDATE_SETTING = 'Impossible de modifier ces réglages',
}
