import React from 'react'
import { TbuttonForm } from '../../../../types/ButtonType'
import { ButtonPrimary } from '../../../Atoms/Buttons/ButtonPrimary/ButtonPrimary'
import { SpinnerCircle } from '../../../Atoms/Spinners/SpinnerCircle/SpinnerCircle'

export function ButtonForm({ text, click, loadActive }: TbuttonForm) {
  return (
    <ButtonPrimary typeButton='submit' click={click}>
      <div className='flex items-center'>
        {loadActive ? <SpinnerCircle size='w-4 h-4' /> : null}
        <div className={`${loadActive ? 'ml-2' : ''}`}>{text}</div>
      </div>
    </ButtonPrimary>
  )
}
