import { BehaviorSubject } from 'rxjs'

export const tokenStore: { token$: BehaviorSubject<string> } = {
  /**
   * token's server api
   * @type string
   */
  token$: new BehaviorSubject('')
}
