import { LinkPrimary } from '@atoms/links/link-primary/link-primary'
import { ElinkModel } from '@atoms/links/link-primary/link-primary.type'
import { store } from '@store/store'
import React from 'react'
import { TlinkBrandHeader } from './link-brand-header.type'

/**
 * brand with initial's brand in header
 * @param addClass?: string | undefined;
 * @returns
 */
export function LinkBrandHeader({ addClass }: TlinkBrandHeader) {
  const handlerClickLinkBrand = () => {
    store.app.menuPrimaryMobileActivateSetFalse()
    store.app.menuUserAvatarActivateSetFalse()
  }

  return (
    <LinkPrimary
      model={ElinkModel.BRAND}
      addClass={addClass}
      link='/'
      click={handlerClickLinkBrand}>
      <span>JH</span>
    </LinkPrimary>
  )
}
