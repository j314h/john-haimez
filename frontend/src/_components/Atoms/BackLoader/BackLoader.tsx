import React from 'react'
import { TbackLoader } from '../../../types'
import './BackLoader.css'

export function BackLoader({ children }: TbackLoader) {
  return <div className='back-loader'>{children}</div>
}
