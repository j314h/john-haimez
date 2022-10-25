import React from 'react'
import './text-info-model.css'
import { TtextInfoModel } from './text-info-model.type'

export function TextInfoModel({ children, addClass }: TtextInfoModel) {
  return <p className={`text-info-model ${addClass}`}>{children}</p>
}
