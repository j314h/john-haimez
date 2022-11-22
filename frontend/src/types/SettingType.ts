/**
 * interface for model setting
 */
export interface Isetting {
  '@id'?: string
  '@type'?: string
  id?: number
  copyright: string
}

export interface IsettingsResponseAxios {
  '@context': string
  '@id': string
  '@type': string
  'hydra:member': Isetting[]
  'hydra:totalItems': number
}
