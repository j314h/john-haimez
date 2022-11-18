import React from 'react'
import { AddIcon, ButtonIcon } from '../../..'
import { TbuttonIconAdd } from '../../../../types'

export function ButtonIconAdd({
  click,
  colorButton,
  colorIcon,
  sizeIcon,
}: TbuttonIconAdd) {
  return (
    <ButtonIcon click={click} colorButton={colorButton} colorIcon={colorIcon}>
      <AddIcon size={sizeIcon} />
    </ButtonIcon>
  )
}
