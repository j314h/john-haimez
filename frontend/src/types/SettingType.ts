/**
 * interface for model setting
 */
export interface Isetting {
  '@context'?: string
  '@id'?: string
  '@type'?: string
  id?: number
  copyright: string
}

/**
 * interface response for call api for getall
 */
export interface IsettingsResponseAxios {
  '@context': string
  '@id': string
  '@type': string
  'hydra:member': Isetting[]
  'hydra:totalItems': number
}

/**
 * enum for url of endpoint for call api
 */
export enum EsettingCallApi {
  CALL_ALL = 'settings',
}
