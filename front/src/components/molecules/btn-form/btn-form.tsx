import { BtnPrimary } from '@atoms/btns/btn-primary/btn-primary'
import { SpinnerCircle } from '@atoms/spinners/spinner-circle/spinner-circle'
import React from 'react'
import { TbtnForm } from './btn-form.type'

/**
 * btn for submit form
 * @param children: JSX.Element | JSX.Element[] | string | string[];
 * @param loading?: boolean | undefined;
 * @returns
 */
export function BtnForm({ children, loading }: TbtnForm) {
  return (
    <BtnPrimary submit>
      {loading ? <SpinnerCircle size='w-3 h-3 md:w-4 md:h-4 mr-2' /> : <div />}
      <span>{children}</span>
    </BtnPrimary>
  )
}
