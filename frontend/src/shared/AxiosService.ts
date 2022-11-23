import { BehaviorSubject } from 'rxjs'
import { AppService } from '../_store'
import { http } from './AxiosInstance'

export const AxiosService = {
  /**
   * custom find all, for all models
   * @param url string
   * @param ob behaviorSubject
   * @returns error | undefined
   */
  findAll: async <T>(url: string, ob: BehaviorSubject<any>) => {
    try {
      const res = await http.get<T | any>(url)
      console.log('RESPONSE FIND ALL', res)
      ob.next([...res.data['hydra:member']!])
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },

  /**
   * custom find, for all models
   * @param url string
   * @param id string
   * @param ob behaviorSubject
   * @returns error | undefined
   */
  find: async <T>(url: string, id: number, ob: BehaviorSubject<any>) => {
    try {
      const res = await http.get<T | any>(`${url}/${id}`)
      ob.next([...res.data['hydra:member']!])
    } catch (error) {
      return AppService.errorMessage(error)
    }
  },
}
