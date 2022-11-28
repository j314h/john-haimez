/**
 * interface for properties recurring to model
 */
export interface ImodelType<T> {
  '@context'?: string
  '@id'?: string
  '@type'?: string
  'hydra:member'?: T[]
  'hydra:totalItems'?: number
  id?: number
}
