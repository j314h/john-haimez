import { BtnIconPrimary } from '@atoms/btns/btn-icon-primary/btn-icon-primary'
import { MoonIcon } from '@atoms/icons/moon-icon'
import { SunIcon } from '@atoms/icons/sun-icon'
import { store } from '@store/store'
import React from 'react'

/**
 * btn dark mode
 */
export function BtnDarkMode() {
  const darkModeActivate = store.darkmode.useDarkModeActivate()

  return (
    <BtnIconPrimary
      click={() => {
        store.darkmode.switchDarkMode(darkModeActivate)
      }}>
      {darkModeActivate ? <SunIcon /> : <MoonIcon />}
    </BtnIconPrimary>
  )
}
