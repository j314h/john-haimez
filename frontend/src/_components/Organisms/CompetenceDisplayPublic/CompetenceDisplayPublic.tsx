import React, { useEffect } from 'react'
import { ContainerPrimary, TitlePrimary } from '../..'
import { EcontainerPrimary, EtitlePrimary } from '../../../types'
import { CompetenceService } from '../../../_store'
import './CompetenceDisplayPublic.css'

export function CompetenceDisplayPublic() {
  const { error, loading } = CompetenceService.useCompetencesCall()
  const competences = CompetenceService.useCompetences()

  return (
    <section className='competence-display-public'>
      {competences.length > 0 ? (
        competences.map(competence => (
          <ContainerPrimary
            key={competence.id}
            addClass='flex flex-col h-80 lg:col-span-2 lg:max-w-none mx-auto'
            typeContainer={EcontainerPrimary.MEDIUM}>
            {/* box image title */}
            <div className='box-img-title-competence'>
              <img
                className='img-competence'
                src={`https://localhost:8000${competence.media?.map(
                  media => media.path,
                )}`}
                alt=''
              />
              <TitlePrimary typeTitlePrimary={EtitlePrimary.H3}>
                {competence.title}
              </TitlePrimary>
            </div>

            {/* description competence */}
            <article className='article-competence'>
              {competence.description}
            </article>
          </ContainerPrimary>
        ))
      ) : (
        <div>Aucune compétences</div>
      )}
    </section>
  )
}
