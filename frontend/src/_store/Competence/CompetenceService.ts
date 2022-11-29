import { useEffect, useState } from 'react'
import { AppService, CompetenceApi } from '..'
import { EventService } from '../../shared/EventService'
import { createHookArray } from '../../shared/StoreService'
import { EeventModel, Icompetence, IerrorApp } from '../../types'
import { CompetenceStore } from './CompetenceStore'

export const CompetenceService = {
  /**
   * hook for list competences
   */
  useCompetences: createHookArray<Icompetence>(CompetenceStore.competences$),

  useCompetencesCall: () => {
    const [error, setError] = useState<IerrorApp>(
      AppService.errorMessage(null).errorApp,
    )
    const [loading, setloading] = useState(false)

    useEffect(() => {
      // get all
      async function call() {
        const res = await CompetenceApi.gets()
        if (res?.errorApp) {
          setError({ ...res.errorApp })
        }
      }

      // add listeners to settings
      const url = new URL(EventService.urlHubMercure)
      url.searchParams.append('topic', EeventModel.COMPETENCE)
      const ev = new EventSource(url)
      ev.onmessage = e => {
        const jsonData = JSON.parse(e.data) as Icompetence
        EventService.operationsEventForEntity(
          CompetenceStore.competences$,
          jsonData,
        )
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
