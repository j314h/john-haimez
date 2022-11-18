import React from 'react'
import { ButtonIcon, EyeCloseIcon, EyeOpenIcon } from '../../..'
import { TbuttonIconEyePassword } from '../../../../types'

export function ButtonIconEyePassword({
  click,
  colorButton,
  colorIcon,
  sizeIcon,
  open,
}: TbuttonIconEyePassword) {
  return (
    <ButtonIcon
      click={click}
      colorButton={colorButton ?? 'hover:bg-transparent'}
      colorIcon={colorIcon ?? 'text-black dark:text-white hover:text-action'}>
      <div>
        {open ? (
          <EyeOpenIcon size={sizeIcon ?? 'w-6 h-5'} />
        ) : (
          <EyeCloseIcon size={sizeIcon ?? 'w-6 h-5'} />
        )}
      </div>
    </ButtonIcon>
  )
}
