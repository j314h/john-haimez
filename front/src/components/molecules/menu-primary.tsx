import { LinkTextPrimary } from '@atoms/links/link-text-primary'
import { store } from '@store/store'
import React from 'react'

/**
 * nav primary for web site default in header
 */
export function NavPrimary() {
  const menuPrimaryMobileActivate = store.app.useMenuPrimaryMobileActivate()

  const handlerCLickLink = () => {
    store.app.menuPrimaryMobileActivateSetFalse()
    store.app.menuUserAvatarActivateSetFalse()
  }

  return (
    <nav
      className={`
      ${menuPrimaryMobileActivate ? 'absolute' : 'hidden'}
      z-50
      top-16
      py-6 px-4
      rounded-3xl
      w-11/12 mx-auto
      md:drop-shadow-none
      md:border-none
      drop-shadow-md
      dark:drop-shadow-none
      dark:border-2
      dark:border-zinc-900
      bg-fond2_claire
      dark:bg-fond2_dark
      md:block
      md:static
      md:rounded-none
      md:py-0
      md:w-fit
      md:bg-transparent
      md:dark:bg-transparent
      `}>
      <ul className='flex flex-col md:flex-row'>
        <li>
          <LinkTextPrimary link='/projects' click={handlerCLickLink}>
            Projets
          </LinkTextPrimary>
        </li>
        <li>
          <LinkTextPrimary
            addClass='mt-4 md:mt-0'
            link='/contact'
            click={handlerCLickLink}>
            Contact
          </LinkTextPrimary>
        </li>
      </ul>
    </nav>
  )
}
