import { useEffect, useState } from 'react'
import { AppService, SettingApi, SettingStore } from '..'
import { EventService } from '../../shared/EventService'
import { createHookArray, createHookObject } from '../../shared/StoreService'
import { EeventModel, IerrorApp, Isetting } from '../../types'

export const SettingService = {
  /**
   * sub of observable settings
   * @returns Isetting[]
   */
  useSettings: createHookArray<Isetting>(SettingStore.settings$),

  /**
   * get all setting and create listener event setting
   */
  useSettingsCall: () => {
    const [error, setError] = useState<IerrorApp>(
      AppService.errorMessage(null).errorApp,
    )
    const [loading, setloading] = useState(false)

    useEffect(() => {
      // get all setting
      async function call() {
        setloading(true)
        const res = await SettingApi.gets()
        if (res?.errorApp) {
          setError({ ...res.errorApp })
        }
        setloading(false)
      }

      // add listeners to settings
      const url = new URL(EventService.urlHubMercure)
      url.searchParams.append('topic', EeventModel.SETTING)
      const ev = new EventSource(url)
      ev.onmessage = e => {
        const jsonData = JSON.parse(e.data) as Isetting
        EventService.operationsEventForEntity(SettingStore.settings$, jsonData)
      }

      call()

      return () => {
        // close connection event listeners
        ev.close()
        setError(AppService.errorMessage(null).errorApp)
      }
    }, [])

    return { error, loading }
  },

  /**
   * hook for setting selected observable
   * @returns Isetting
   */
  useSetting: createHookObject<Isetting>(SettingStore.settingSelected$),

  /**
   * get one setting and create listener event setting
   */
  useSettingCall: (id: number) => {
    const [error, setError] = useState<IerrorApp>(
      AppService.errorMessage(null).errorApp,
    )
    const [loading, setloading] = useState(false)

    useEffect(() => {
      // get all setting
      async function call() {
        setloading(true)
        const res = await SettingApi.get(id)
        if (res?.errorApp) {
          setError({ ...res.errorApp })
        }
        setloading(false)
      }

      // add listeners to setting
      const url = new URL(EventService.urlHubMercure)
      url.searchParams.append('topic', EeventModel.SETTING)
      const ev = new EventSource(url)
      ev.onmessage = e => {
        const jsonData = JSON.parse(e.data) as Isetting
        let oldData: Isetting = {} as Isetting
        SettingStore.settingSelected$.subscribe(v => {
          oldData = v
        })
        SettingStore.settingSelected$.next({ ...oldData, ...jsonData })
      }

      call()

      return () => {
        // close connection event listeners
        ev.close()
        setError(AppService.errorMessage(null).errorApp)
      }
    }, [])

    return { error, loading }
  },
}
