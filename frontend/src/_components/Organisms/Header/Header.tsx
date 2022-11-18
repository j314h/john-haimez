import React from 'react'
import { ButtonModeDark } from '../../Molecules/Buttons/ButtonModeDark/ButtonModeDark'

export function Header() {
  return (
    <header className='bg-sec dark:bg-sec-d text-black dark:text-white'>
      Header
      <ButtonModeDark />
    </header>
  )
}
