import { Terror } from '@atoms/errors/error-text/error.type'
import { socket } from '@shared-app/http/http.instance'
import { useEffect, useState } from 'react'
import { Isetting } from './setting.model'
import { settingService } from './setting.service'
import { settingStore } from './setting.store'

export const settingHook = {
  /**
   * hook for observable one setting
   */
  useSetting: () => {
    const [setting, setSetting] = useState({} as Isetting)
    const [error, setError] = useState<Terror>({})
    const [loading, setLoading] = useState(false)
    const [valueCopyright, setValueCopyright] = useState('')

    useEffect(() => {
      async function call() {
        await settingService.findFirst()
      }

      socket.on('settingServer', (setting: Isetting) => {
        console.log('ON', setting)
        if (setting.id) {
          setSetting({ ...setting })
          setValueCopyright(setting.copyright)
        } else {
          setSetting({} as Isetting)
          setValueCopyright('')
        }
      })

      settingStore.settingLoading$.subscribe(value => setLoading(value))
      settingStore.settingError$.subscribe(value => setError(value))

      call()

      return () => {
        socket.off('settingServer')
      }
    }, [])

    return { setting, loading, error, valueCopyright, setValueCopyright }
  },

  /**
   * hook for display form or not
   * @returns boolean
   */
  useDisplayForm: () => {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
      settingStore.settingDisplayForm$.subscribe(value => setDisplay(value))
    }, [])

    return display
  },
}
