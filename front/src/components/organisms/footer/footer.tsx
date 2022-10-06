import { Copyright } from '@atoms/copyright/copyright'
import { BrandFooter } from '@molecules/brand-footer'
import { NavSecondary } from '@molecules/menu-secondary'
import './footer.css'
import React from 'react'
import { store } from '@store/store'

export function Footer() {
  const { setting } = store.setting.useSetting()

  return (
    <footer className='footer-app'>
      <div className='footer-menu-secondary'>
        {/* menu */}
        <NavSecondary />

        {/* brand */}
        <BrandFooter />
      </div>

      {/* copyright */}
      <Copyright>{setting?.copyright!}</Copyright>
    </footer>
  )
}
