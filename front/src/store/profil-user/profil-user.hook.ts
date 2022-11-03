import { store } from '@store/store'
import { useEffect, useState } from 'react'

export const profilUserHook = {
  /**
   * hook for form info profil user
   */
  useFormProfilUserInfo: () => {
    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [loadingUpdateInfo, setLoadingUpdateInfo] = useState(false)

    useEffect(() => {
      store.user.userCurrent$.subscribe(value => {
        if (value.email && value.name) {
          setValueEmail(value.email)
          setValueName(value.name)
        }
      })

      store.profilUser.loadingUpdateProfilUserInfo$.subscribe(value =>
        setLoadingUpdateInfo(value),
      )
    }, [])

    return {
      valueEmail,
      valueName,
      setValueName,
      setValueEmail,
      loadingUpdateInfo,
    }
  },

  /**
   * hook for form update password
   */
  useFormProfilUserPassword: () => {
    const [password, setpassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [confirmNewPassword, setconfirmNewPassword] = useState('')

    return {
      password,
      newPassword,
      confirmNewPassword,
      setpassword,
      setnewPassword,
      setconfirmNewPassword,
    }
  },

  /**
   * hook for diplay form profil user
   */
  useDisplayForm: () => {
    const [displayForm, setDisplayForm] = useState(false)

    useEffect(() => {
      store.profilUser.displayForm$.subscribe(value => setDisplayForm(value))
    }, [])

    return displayForm
  },
}
