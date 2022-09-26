import { Copyright } from '@atoms/copyright/copyright'
import { BrandFooter } from '@molecules/brand-footer'
import { NavSecondary } from '@molecules/menu-secondary'
import React from 'react'

export function Footer() {
  return (
    <footer
      className='
        px-4 py-8
        md:px-28 md:py-0 md:pb-4 md:pt-20
        text-black dark:text-white
        bg-fond2_claire
        dark:bg-fond2_dark
        '>
      <div className='flex flex-col md:flex-row-reverse md:mb-10 justify-start md:justify-between md:items-start'>
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
