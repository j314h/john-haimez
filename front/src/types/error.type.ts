/**
 * type for error component
 */
export type Terror = {
  children?: JSX.Element | JSX.Element[] | string | string[]
  position?: string
}

/**
 * enum for string of error of all app
 */
export enum Eerror {
  LOGIN = 'Erreur de connexion',
}
