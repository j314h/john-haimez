import React, { useEffect } from 'react'
import { EtitlePrimary } from '../../../types'
import {
  CompetenceDisplayPublic,
  ProfileDisplayPublic,
  TitlePrimary,
} from '../../../_components'
import { CompetenceService, ProfileService } from '../../../_store'

export function Home() {
  return (
    <>
      {/* profile */}
      <ProfileDisplayPublic />

      {/* competence */}
      <div className='mt-28 mb-8'>
        <TitlePrimary
          addClass='mb-16 sm:ml-8 ml-4 text-high'
          typeTitlePrimary={EtitlePrimary.H2}>
          Compétences
        </TitlePrimary>
        <CompetenceDisplayPublic />
      </div>

      {/* project */}
      <div className='mt-28 mb-8'>
        <TitlePrimary
          addClass='mb-16 sm:ml-8 ml-4 text-high'
          typeTitlePrimary={EtitlePrimary.H2}>
          Projets
        </TitlePrimary>
      </div>

      {/* social */}
      <div className='mt-28 mb-8'>
        <TitlePrimary
          addClass='mb-16 sm:ml-8 ml-4 text-high'
          typeTitlePrimary={EtitlePrimary.H2}>
          Me retrouver
        </TitlePrimary>
      </div>
    </>
  )
}
