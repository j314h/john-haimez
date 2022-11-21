import React from 'react'
import { LinkSecondary } from '../../..'
import { TmenuSecondary } from '../../../../types'

export function MenuSecondary({ addClass }: TmenuSecondary) {
  return (
    <nav className={`${addClass}`}>
      <ul className='flex flex-col items-center'>
        <li className='py-2'>
          <LinkSecondary link='/'>Accueil</LinkSecondary>
        </li>
        <li className='py-2'>
          <LinkSecondary link='/projects'>Projets</LinkSecondary>
        </li>
        <li className='py-2'>
          <LinkSecondary link='/contact'>Contact</LinkSecondary>
        </li>
        <li className='py-2'>
          <LinkSecondary link='/connexion'>Connexion</LinkSecondary>
        </li>
      </ul>
    </nav>
  )
}
