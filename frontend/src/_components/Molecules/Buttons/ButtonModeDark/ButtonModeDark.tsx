import React from 'react'
import { TbuttonModeDark } from '../../../../types'
import { ThemeStore } from '../../../../_store'
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon'
import { MoonIcon } from '../../../Atoms/Icons/MoonIcon'
import { SunIcon } from '../../../Atoms/Icons/SunIcon'

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
