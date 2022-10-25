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
  // user defined
  LOGIN = 'Erreur de connexion',

  // setting
  CREATE_SETTING = 'Impossible de créer ces réglages',
  UPDATE_SETTING = 'Impossible de modifier ces réglages',

  // profil user info
  UPDATE_PROFIL_USER_INFO = 'Impossible de modifier vos infos',
}
