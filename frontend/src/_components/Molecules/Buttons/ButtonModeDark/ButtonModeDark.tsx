import React from 'react'
import { ButtonIcon, MoonIcon, SunIcon } from '../../..'
import { TbuttonModeDark } from '../../../../types'
import { ThemeStore } from '../../../../_store'

export function ButtonModeDark({ addClass }: TbuttonModeDark) {
  const modeDark = ThemeStore.useModeDark()
  return (
    <ButtonIcon
      addClass={addClass}
      click={() => ThemeStore.switchModeDark(modeDark)}>
      {modeDark ? (
        <SunIcon color='text-warning-d' />
      ) : (
        <MoonIcon color='text-action' />
      )}
    </ButtonIcon>
  )
}
