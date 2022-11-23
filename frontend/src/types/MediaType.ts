import { ImodelType } from '.'

/**
 * interface for media model
 */
export interface Imedia extends ImodelType<never> {
  id?: number
  path?: string
  slugMedia?: string
  name?: string
}
