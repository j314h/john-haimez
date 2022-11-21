import React from 'react'
import { LinkBrand, MenuSecondary } from '../..'
import './Footer.css'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-link-menu'>
        {/* link home */}
        <div className='flex items-center flex-col sm:items-start sm:pt-2'>
          <LinkBrand>John Haimez</LinkBrand>
          <p className='text-s2 sm:text-s3 font-medium'>
            Développeur Web Javascript et Php
          </p>
        </div>

        {/* menu secondary */}
        <MenuSecondary addClass='mb-8' />
      </div>
      {/* copyright */}
      <div>
        <p className='text-s1 text-center mt-12 sm:mt-6 md:mt-4'>blabla</p>
      </div>
    </footer>
  )
}
