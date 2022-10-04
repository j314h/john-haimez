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

  /**
   * hook for look menu avatar is activate or not
   * @returns boolean
   */
  useMenuUserAvatarActivate: () => {
    const [menuUserAvatarActivate, setMenuUserAvatarActivate] = useState(false)

    useEffect(() => {
      appStore.menuUserAvatarActivate$.subscribe(value =>
        setMenuUserAvatarActivate(value),
      )
    }, [])

    return menuUserAvatarActivate
  },

  /**
   * hook for state of menu side
   * @returns boolean
   */
  useMenuSideActivate: () => {
    const [menuSideActivate, setMenuSideActivate] = useState(false)

    useEffect(() => {
      appStore.menuSideActive$.subscribe(value => setMenuSideActivate(value))
    })

    return menuSideActivate
  },
}
