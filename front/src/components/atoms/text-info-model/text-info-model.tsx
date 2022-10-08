import React from 'react'
import './text-info-model.css'
import { TtextInfoModel } from './text-info-model.type'

export function TextInfoModel({ children }: TtextInfoModel) {
  return <p className='text-info-model'>{children}</p>
}
