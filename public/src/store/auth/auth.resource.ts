import { http } from '../../shared/http/http.instance'
import { ItokenResponse } from '../../types/Token.type'
import { authAction } from './auth.action'

export const authResource = {
  async login(email: string, password: string) {
    try {
      authAction.activeLoading()
      // login
      const res = await http.post<ItokenResponse>('user/login', {
        email: email,
        password: password,
      })

      // if token exist add token in store
      if (res.data.token) {
        authAction.addToken(res.data.token)
      }
      authAction.disableLoading()
    } catch (error) {
      authAction.addError(error)
      authAction.disableLoading()
    }
  },

  async logout() {},
}
