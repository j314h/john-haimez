import { Iuser } from '@types-app/models/user.model'
import { useEffect, useState } from 'react'
import { userService } from './user.service'
import { userStore } from './user.store'

export const userHook = {
  /**
   * hook for login error
   * @returns string
   */
  useLoginError: () => {
    const [error, setError] = useState('')

    useEffect(() => {
      // reset error didmountcomponent
      function cleanError() {
        userService.resetError()
      }

      // sub error observable
      userStore.loginError$.subscribe(value => setError(value))

      return cleanError()
    }, [])

    return error
  },

  /**
   * hook for login in progress
   */
  useLoginLoader: () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
      userStore.loginLoading$.subscribe(value => setLoader(value))
    }, [])

    return loader
  },

  /**
   * hook for logout in progress
   */
  useLogoutLoader: () => {
    const [loader, setLoader] = useState(false)

    useEffect(() => {
      userStore.logoutLoading$.subscribe(value => setLoader(value))
    }, [])

    return loader
  },

  /**
   * hook for userCurrent
   * @returns user
   */
  useUserCurrent: () => {
    const [userCurrent, setUserCurrent] = useState({} as Iuser)

    useEffect(() => {
      userStore.userCurrent$.subscribe(value => setUserCurrent(value))
    }, [])

    return userCurrent
  },
}
