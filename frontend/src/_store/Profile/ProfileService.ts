import { useEffect, useState } from 'react'
import { map } from 'rxjs'
import { EventService } from '../../shared/EventService'
import { EeventModel, IerrorApp, Iprofile } from '../../types'
import { AppService } from '../App/AppService'
import { ProfileApi } from './ProfileApi'
import { ProfileStore } from './ProfileStore'

export const ProfileService = {
  /**
   * hook for recover one first profile
   */
  useProfile: () => {
    const [value, setValue] = useState<Iprofile | null>(null)

    useEffect(() => {
      ProfileStore.profiles$
        .pipe(
          map((v: Iprofile[], i) => {
            if (v.length > 0) {
              return v[0]
            } else {
              return null
            }
          }),
        )
        .subscribe(v => setValue(v))

      return () => {}
    }, [])

    return value
  },

  /**
   * hook custom for call find all profile
   */
  useProfilesCall: () => {
    const [error, setError] = useState<IerrorApp>(
      AppService.errorMessage(null).errorApp,
    )
    const [loading, setloading] = useState(false)

    useEffect(() => {
      async function call() {
        const res = await ProfileApi.gets()
        if (res?.errorApp) {
          setError({ ...res.errorApp })
        }
      }

      // add listeners to profile
      const url = new URL(EventService.urlHubMercure)
      url.searchParams.append('topic', EeventModel.PROFILE)
      const ev = new EventSource(url)
      ev.onmessage = e => {
        const jsonData = JSON.parse(e.data) as Iprofile
        EventService.operationsEventForEntity(ProfileStore.profiles$, jsonData)
      }

      call()
      return () => {
        ev.close()
        setError(AppService.errorMessage(null).errorApp)
      }
    }, [])

    return { error, loading }
  },
}
