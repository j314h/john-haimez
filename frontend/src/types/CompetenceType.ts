import { Imedia, ImodelType } from '.'

/**
 * interface for model competence
 */
export interface Icompetence extends ImodelType<never> {
  title?: string
  description?: string
  media?: Imedia[]
}

/**
 * interface response for call api for getall
 */
export interface IcompetencesResponseAxios extends ImodelType<Icompetence> {}

/**
 * enum for url of endpoint for call
 */
export enum EcompetenceCallApi {
  CALL_ALL = 'competences',
  CALL_MEDIA_POST = 'media/competence',
  // for delete see to media type
}
