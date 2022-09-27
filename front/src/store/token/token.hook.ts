import { useEffect, useState } from 'react'
import { tokenStore } from './token.store'

export const tokenHook = {
  /**
   * hook for token connexion user
   * @returns
   */
  useTokenUserCurrent() {
    const [tokenUserCurrent, setTokenUserCurrent] = useState('')

    useEffect(() => {
      tokenStore.token$.subscribe((value: string) => {
        setTokenUserCurrent(value)
      })
    }, [])

    return tokenUserCurrent
  }
}
