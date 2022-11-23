import { http } from './AxiosInstance'

export const httpInterceptor = {
  /**
   * interceptor request
   * */
  request() {
    http.interceptors.request.use(
      config => {
        if (localStorage.getItem('nekto')) {
          config.headers!.Authorization = `Bearer ${localStorage.getItem(
            'nekto',
          )}`
        } else {
          config.headers
        }
        console.log('request Interceptor', config)
        return config
      },
      async error => {
        console.log('Error request Interceptor', error)
        return Promise.reject(error)
      },
    )
  },

  /**
   * interceptor response
   * */
  response() {
    http.interceptors.response.use(
      response => {
        if (response.status === 401) {
          //authAction.deleteToken()
        }
        console.log('response Interceptor', response)
        return response
      },
      async error => {
        if (error.response.status === 401) {
          console.log('error 401')
          //authAction.deleteToken()
        }
        console.log('Error response Interceptor', error)
        return Promise.reject(error)
      },
    )
  },
}
