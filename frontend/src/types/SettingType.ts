import { ImodelType } from '.'

/**
 * interface for model setting
 */
export interface Isetting extends ImodelType<never> {
  id?: number
  copyright: string
}

/**
 * interface response for call api for getall
 */
export interface IsettingsResponseAxios extends ImodelType<Isetting> {}

/**
 * enum for url of endpoint for call api
 */
export enum EsettingCallApi {
  CALL_ALL = 'settings',
}
