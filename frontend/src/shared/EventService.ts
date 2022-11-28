import { BehaviorSubject } from 'rxjs'
import { ImodelType } from '../types'

/**
 * service for event of all app
 */
export const EventService = {
  /**
   * url of envent mercure
   */
  urlHubMercure: 'http://127.0.0.1:50000/.well-known/mercure', // | add .env

  /**
   * create new object json ld
   * @param entity other model
   * @param idEntity id of entity
   * @returns object json ld
   */
  createObjectJsonLd: <T>(entity: T, idEntity: number) => {
    return {
      '@context': '/api/contexts/Competence',
      '@id': `/api/competences/${idEntity}`,
      '@type': `Competence`,
      ...entity,
    }
  },

  operationsEventForEntity: (obser: BehaviorSubject<any[]>, data: any) => {
    let oldValue = obser.getValue()
    let element = oldValue.find(el => el.id === data.id)
    if (element) {
      // update
      oldValue = oldValue.filter(el => el.id !== element?.id)
      const newElement = [{ ...element, ...data }]
      oldValue = [...oldValue, ...newElement!]
    } else if (data.id) {
      // create
      const newElement = EventService.createObjectJsonLd(data, data.id)
      oldValue = [...oldValue, newElement]
    } else if (data['@id']) {
      // delete
      oldValue = oldValue.filter(el => el['@id'] !== data['@id'])
    }
    obser.next([...oldValue])
  },
}
