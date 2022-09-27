import { appService } from '@store/app/app.service'
import { useEffect, useRef } from 'react'

export const outsideClickHook = {
  /**
   * hook for aplicated action on ref element
   * @returns React.MutableRefObject<any>
   */
  useOutSideClick: () => {
    const myRef = useRef<any>()

    // if click in main balise set observable toggleMenuMobile$
    const handleClickOutside = (e: { target: any }) => {
      if (myRef.current!.contains(e.target)) {
        appService.menuPrimaryMobileActivateSetFalse()
        appService.menuUserAvatarActivateSetFalse()
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    })

    return {
      myRef,
    }
  },
}
