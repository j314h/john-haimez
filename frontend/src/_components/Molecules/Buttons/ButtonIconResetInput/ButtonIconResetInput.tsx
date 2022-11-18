import React from 'react'
import { ButtonIcon, CrossIcon } from '../../..'
import { TbuttonIconResetInput } from '../../../../types'

export function ButtonIconResetInput({
  click,
  colorButton,
  colorIcon,
  seeOrNot,
  sizeIcon,
}: TbuttonIconResetInput) {
  return (
    <ButtonIcon
      click={click}
      colorButton={colorButton ?? 'hover:bg-transparent'}
      colorIcon={colorIcon ?? 'text-black dark:text-white hover:text-error'}>
      {seeOrNot ? <CrossIcon size={sizeIcon ?? 'w-5 h-5'} /> : null}
    </ButtonIcon>
  )
}
