import { appHook } from './app/app.hook'
import { appService } from './app/app.service'
import { appStore } from './app/app.store'
import { darkModeHook } from './darkmode/darkmode.hook'
import { darkModeService } from './darkmode/darkmode.service'
import { darkModeStore } from './darkmode/darkmode.store'
import { tokenHook } from './token/token.hook'
import { tokenService } from './token/token.service'
import { tokenStore } from './token/token.store'

export const store = {
  token: {
    ...tokenStore,
    ...tokenService,
    ...tokenHook,
  },
  darkmode: {
    ...darkModeStore,
    ...darkModeService,
    ...darkModeHook,
  },
  app: {
    ...appStore,
    ...appService,
    ...appHook,
  },
}
