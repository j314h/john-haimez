import { useEffect, useState } from 'react'
import { SettingApi, SettingStore } from '..'
import { EventService } from '../../shared/EventService'
import { EeventModel, Isetting } from '../../types'

export const SettingService = {
  /**
   * sub of observable settings
   * @returns Isetting[]
   */
  useSettings: () => {
    const [value, setValue] = useState<Isetting[]>([])
    useEffect(() => {
      SettingStore.settings$.subscribe(v => setValue([...v]))
    }, [])

    return value
  },

  /**
   * get all setting and create listener event setting
   */
  useSettingsCall: () => {
    useEffect(() => {
      // get all setting
      async function call() {
        await SettingApi.gets()
      }

      // add listeners to settings
      const url = new URL(EventService.urlHubMercure)
      url.searchParams.append('topic', EeventModel.SETTING)
      const ev = new EventSource(url)
      ev.onmessage = e => {
        const jsonData = [JSON.parse(e.data) as Isetting]
        SettingStore.settings$.next([...jsonData])
      }

      call()

      return () => {
        // close connection event listeners
        ev.close()
      }
    }, [])
  },
}
