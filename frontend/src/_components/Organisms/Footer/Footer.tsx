import React from 'react'
import { LinkBrand, MenuSecondary } from '../..'
import './Footer.css'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='flex flex-col-reverse items-center'>
        {/* link home */}
        <div className='flex items-center flex-col'>
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
        <p></p>
      </div>
    </footer>
  )
}
