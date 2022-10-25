import { profilUserHook } from '@store/profil-user/profil-user.hook'
import { profilUserService } from '@store/profil-user/profil-user.service'
import { profilUserStore } from '@store/profil-user/profil-user.store'
import { appHook } from './app/app.hook'
import { appService } from './app/app.service'
import { appStore } from './app/app.store'
import { darkModeHook } from './darkmode/darkmode.hook'
import { darkModeService } from './darkmode/darkmode.service'
import { darkModeStore } from './darkmode/darkmode.store'
import { outsideClickHook } from './outside-click/outside-click.hook'
import { outsideClickService } from './outside-click/outside-click.service'
import { outsideClickStore } from './outside-click/outside-click.store'
import { settingHook } from './setting/setting.hook'
import { settingService } from './setting/setting.service'
import { settingStore } from './setting/setting.store'
import { tokenHook } from './token/token.hook'
import { tokenService } from './token/token.service'
import { tokenStore } from './token/token.store'
import { userHook } from './user/user.hook'
import { userService } from './user/user.service'
import { userStore } from './user/user.store'

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
  outsideClick: {
    ...outsideClickStore,
    ...outsideClickService,
    ...outsideClickHook,
  },
  user: {
    ...userStore,
    ...userService,
    ...userHook,
  },
  setting: {
    ...settingStore,
    ...settingService,
    ...settingHook,
  },
  profilUser: {
    ...profilUserStore,
    ...profilUserService,
    ...profilUserHook,
  },
}
