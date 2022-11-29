import React from 'react'
import { BackLoader } from '../../../Atoms/BackLoader/BackLoader'
import { SpinnerCircle } from '../../../Atoms/Spinners/SpinnerCircle/SpinnerCircle'
import './SpinnerLoader.css'

export function SpinnerLoader() {
  return (
    <BackLoader>
      <SpinnerCircle size='w-12 h-12' />
    </BackLoader>
  )
}
