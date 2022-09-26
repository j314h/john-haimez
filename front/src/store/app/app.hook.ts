import { useEffect, useState } from 'react'
import { appStore } from './app.store'

export const appHook = {
  /**
   * hook for look state menu primary mobile activated
   */
  useMenuPrimaryMobileActivate: () => {
    const [menuPrimaryMobileActivate, setMenuPrimaryMobileActivate] =
      useState(false)

    useEffect(() => {
      appStore.menuPrimaryMobileActivate$.subscribe(value =>
        setMenuPrimaryMobileActivate(value),
      )
    }, [])

    return menuPrimaryMobileActivate
  },
}
