import { Copyright } from '@atoms/copyright/copyright'
import { BrandFooter } from '@molecules/brand-footer'
import { NavSecondary } from '@molecules/menu-secondary'
import './footer.css'
import React from 'react'

export function Footer() {
  return (
    <footer className='footer-app'>
      <div className='footer-menu-secondary'>
        {/* menu */}
        <NavSecondary />

        {/* brand */}
        <BrandFooter />
      </div>

      {/* copyright */}
      <Copyright>Copyright - John Haimez - tous droits réservés</Copyright>
    </footer>
  )
}
