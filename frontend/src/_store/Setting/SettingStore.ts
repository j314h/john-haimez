import { useEffect, useState } from 'react'
import { BehaviorSubject, map, mergeMap } from 'rxjs'
import { SettingService } from '..'
import { EventService } from '../../shared/EventService'
import { EeventModel, Isetting } from '../../types'

export const SettingStore = {
  settings$: new BehaviorSubject<Isetting[]>([]),
  settingsError$: new BehaviorSubject<string | null>(null),

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
        await SettingService.gets()
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
