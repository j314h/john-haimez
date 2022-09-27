import { BtnIcon } from '@atoms/btns/btn-icon'
import { CrossIcon } from '@atoms/icons/cross-icon'
import { TbtnUserAvatar } from '@types-app/btn.type'
import React from 'react'

export function BtnUserAvatar({ open = false }: TbtnUserAvatar) {
  return (
    <BtnIcon>
      {open ? (
        <CrossIcon />
      ) : (
        <img
          width='30px'
          height='30px'
          src='https://ui-avatars.com/api/?bold=true&rounded=true&uppercase=true&name=A&font-size=0.5&background=19A7FF&color=ffffff'
        />
      )}
    </BtnIcon>
  )
}
