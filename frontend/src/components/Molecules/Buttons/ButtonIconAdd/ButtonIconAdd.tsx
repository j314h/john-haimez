import React from 'react'
import { TbuttonIconAdd } from '../../../../types/ButtonType'
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon'
import { AddIcon } from '../../../Atoms/Icons/AddIcon'

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
