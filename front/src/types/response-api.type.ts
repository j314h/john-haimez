/**
 * interface for error of response api
 */
export interface IerrorResponse {
  status_code: number
  error_message: string
  state_error: string
}

/**
 * interface for response success of api
 */
export interface IsuccessResponse {
  emit: boolean
  message: string
}

/**
 * interface for response of sse request
 */
export interface IsseResponse<T> {
  event: string
  response: T
}
