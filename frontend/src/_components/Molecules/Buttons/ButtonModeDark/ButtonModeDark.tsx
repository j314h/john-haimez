import React from 'react'
import { ThemeStore } from '../../../../_store'
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon'
import { MoonIcon } from '../../../Atoms/Icons/MoonIcon'
import { SunIcon } from '../../../Atoms/Icons/SunIcon'

export function ButtonModeDark() {
  const modeDark = ThemeStore.useModeDark()
  return (
    <ButtonIcon click={() => ThemeStore.switchModeDark(modeDark)}>
      {modeDark ? (
        <SunIcon color='text-warning-d' />
      ) : (
        <MoonIcon color='text-action' />
      )}
    </ButtonIcon>
  )
}
