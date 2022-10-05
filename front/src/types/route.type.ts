/**
 * enum has all route of app
 */
export enum Eroute {
  URL_EVENT = 'http://localhost:5000/api/v1/',
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

  // setting
  SETTING_SSE = 'setting/first/sse',
  SETTING_GET = 'setting/first',
  SETTING_POS_PAT_DEL = 'setting/',
}
