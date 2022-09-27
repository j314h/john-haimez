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
}
