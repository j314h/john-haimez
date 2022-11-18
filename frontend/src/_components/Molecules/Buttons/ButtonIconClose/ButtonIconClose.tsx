import React from 'react'
import { ButtonIcon, CrossIcon } from '../../..'
import { TbuttonIconClose } from '../../../../types'

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
