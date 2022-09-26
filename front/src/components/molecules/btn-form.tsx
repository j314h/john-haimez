import { BtnText } from '@atoms/btns/btn-text'
import { SpinnerCircle } from '@atoms/spinners/spinner-circle'
import { TbtnForm } from '@types-app/btn.type'
import React from 'react'

/**
 * btn for submit form
 * @param children: JSX.Element | JSX.Element[] | string | string[];
 * @param loading?: boolean | undefined;
 * @returns
 */
export function BtnForm({ children, loading }: TbtnForm) {
  return (
    <BtnText submit>
      {loading ? <SpinnerCircle size='w-3 h-3 md:w-5 md:h-5' /> : <div />}
      <span className='ml-2'>{children}</span>
    </BtnText>
  )
}
