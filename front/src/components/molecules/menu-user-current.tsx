import React from 'react'
import { LinkTextSecondary } from '@atoms/links/link-text-secondary'
import { BtnLogout } from './btn-logout'

export default function MenuUserCurrent() {
  return (
    <nav>
      <ul>
        {/* go to dashboard */}
        <li>
          <LinkTextSecondary link='/dashboard'>
            Tableau de bord
          </LinkTextSecondary>
        </li>

        {/* got to login and diconnect user */}
        <li>
          <BtnLogout>Se déconnecter</BtnLogout>
        </li>
      </ul>
    </nav>
  )
}
