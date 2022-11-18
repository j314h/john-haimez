import React from 'react'
import { ButtonIcon, TrashIcon } from '../../..'
import { TbuttonIconDelete } from '../../../../types'

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
