import React from 'react'
import { TbuttonIconDelete } from '../../../../types/ButtonType'
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon'
import { TrashIcon } from '../../../Atoms/Icons/TrashIcon'

export function ButtonIconDelete({
  click,
  colorButton,
  colorIcon,
  sizeIcon,
}: TbuttonIconDelete) {
  return (
    <ButtonIcon
      click={click}
      colorButton={colorButton}
      colorIcon={colorIcon ?? 'text-error'}>
      <TrashIcon size={sizeIcon} />
    </ButtonIcon>
  )
}
