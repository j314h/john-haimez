import React from 'react'
import { TerrorText } from '../../../../types'

export function ErrorText({
  text,
  addClass,
  sizeText,
  addClassDiv,
}: TerrorText) {
  return (
    <div className={`${addClassDiv}`}>
      <p className={`text-error ${addClass} ${sizeText ?? 'text-s2'}`}>
        {text}
      </p>
    </div>
  )
}
