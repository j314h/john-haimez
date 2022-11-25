import React from 'react'
import { TitlePrimary } from '../..'
import { EcontainerPrimary, EtitlePrimary } from '../../../types'
import { ContainerPrimary } from '../../Atoms/Containers/ContainerPrimary/ContainerPrimary'
import './CompetenceDisplayPublic.css'

export function CompetenceDisplayPublic() {
  return (
    <section className='max-w-5xl mx-auto flex flex-col items-center md:flex-row justify-around'>
      <ContainerPrimary
        addClass='flex flex-col h-72 mb-4 md:mb-0 md:mx-4'
        typeContainer={EcontainerPrimary.MEDIUM}>
        {/* box image title */}
        <div className='flex-none'>
          <img src='' alt='' />
          <TitlePrimary typeTitlePrimary={EtitlePrimary.H3} addClass=''>
            React JS
          </TitlePrimary>
        </div>

        {/* description competence */}
        <article className='flex-1 px-2 py-4 text-s5'>
          je suis l'article je suis l'article je suis l'article je suis
          l'article je suis l'article je suis l'article je suis l'article je je
          suis l'article je suis l'article je suis l'article je suis l'article
          je suis l'article je suis l'article je suis l'article je je suis
        </article>
      </ContainerPrimary>
    </section>
  )
}
