/**
 * enum has all route of app
 */
export enum Eroute {
  // user
  USER_GET_POST = 'user',
  USER_GET_PATCH_DELETE = 'user/',

  // role
  ROLE_GET_POST = 'role',
  ROLE_GET_PATCH_DELETE = 'role/',

  // auth
  AUTH_LOGIN_POST = 'auth/login',
  AUTH_LOGOUT_DELETE = 'auth/logout',
  AUTH_TEST_GET = 'auth/test-jwt',
  AUTH_VERIFIED = 'auth/verified',
  AUTH_UPDATE_USER_CURRENT = 'auth/update-user-current',
  AUTH_UPDATE_PASSWORD_USER_CURRENT = 'auth/update-password-user-current',

  // setting
  SETTING_GET_POS_PAT_DEL = 'setting',
}

/**
 * interface for call api for model has a SSE
 */
export interface IresponseCallApi {
  findFirst: boolean
  findAll: boolean
  findOne: boolean
  created?: boolean
  updated?: boolean
  deleted?: boolean
}
