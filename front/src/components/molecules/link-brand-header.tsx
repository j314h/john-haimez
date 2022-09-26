import { LinkBrand } from '@atoms/links/link-brand'
import { store } from '@store/store'
import { TlinkBrandHeader } from '@types-app/link.type'
import React from 'react'

/**
 * brand with initial's brand in header
 * @param addClass?: string | undefined;
 * @returns
 */
export function LinkBrandHeader({ addClass }: TlinkBrandHeader) {
  return (
    <LinkBrand
      addClass={addClass}
      link='/'
      click={store.app.menuPrimaryMobileActivateSetFalse}>
      <span>JH</span>
    </LinkBrand>
  )
}
