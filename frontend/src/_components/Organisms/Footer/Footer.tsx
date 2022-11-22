import React from 'react'
import { LinkBrand, MenuSecondary, SpinnerCircle } from '../..'
import { SettingService } from '../../../_store'
import './Footer.css'

export function Footer() {
  // call get all settings
  SettingService.useSettingsCall()
  // get value of observable settings
  const settings = SettingService.useSettings()

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
        {settings.length > 0 ? (
          <p className='text-s1 text-center mt-12 sm:mt-6 md:mt-4'>
            {settings[0].copyright}
            {`${new Date().getFullYear()}`}
          </p>
        ) : (
          <div className='flex justify-center mt-12 sm:mt-6 md:mt-4'>
            <SpinnerCircle />
          </div>
        )}
      </div>
    </footer>
  )
}
