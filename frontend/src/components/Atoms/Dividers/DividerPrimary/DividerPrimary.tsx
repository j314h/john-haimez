import React from 'react'
import { TdividerPrimary } from '../../../../types/DividerType'

export function DividerPrimary({ mt, mb }: TdividerPrimary) {
  return (
    <div
      className={`h-0.5 bg-fondexception ${mt ?? 'mt-4'} ${
        mb ?? 'mb-4'
      }`}></div>
  )
}
