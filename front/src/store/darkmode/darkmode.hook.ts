import { useEffect, useState } from 'react'
import { darkModeStore } from './darkmode.store'

export const darkModeHook = {
  /**
   * hook for observable darkModeActivate$
   * @return boolean
   */
  useDarkModeActivate() {
    const [darkModeActivate, setDarkModeActivate] = useState(false)

    useEffect(() => {
      darkModeStore.darkModeActivate$.subscribe((value: boolean) => {
        setDarkModeActivate(value)
      })
    }, [])

    return darkModeActivate
  },
}
