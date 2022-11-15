import React from 'react'
import { TbuttonIconEyePassword } from '../../../../types/ButtonType'
import { ButtonIcon } from '../../../Atoms/Buttons/ButtonIcon/ButtonIcon'
import { EyeCloseIcon } from '../../../Atoms/Icons/EyeCloseIcon'
import { EyeOpenIcon } from '../../../Atoms/Icons/EyeOpenIcon'

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
