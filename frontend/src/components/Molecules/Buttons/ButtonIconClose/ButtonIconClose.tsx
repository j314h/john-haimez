import React from 'react'
import { TbuttonIconClose } from '../../../../types/ButtonType'
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon'
import { CrossIcon } from '../../../Atoms/Icons/CrossIcon'

export function ButtonIconClose({
  click,
  colorButton,
  colorIcon,
  sizeIcon,
}: TbuttonIconClose) {
  return (
    <ButtonIcon
      click={click}
      colorButton={colorButton}
      colorIcon={colorIcon ?? 'text-error'}>
      <CrossIcon size={sizeIcon} />
    </ButtonIcon>
  )
}
