import React from 'react'
import { T1 } from '@atoms/titles/t1'
import { T2 } from '@atoms/titles/t2'

/**
 * brand for footer display initial's brand and sub title
 * @returns
 */
export function BrandFooter() {
  return (
    <section className='text-center md:text-left my-6 md:my-0'>
      <T1>JH</T1>
      <T2 color='text-high'>
        <div>Développeur Web</div>
        <div>Javascript et Php</div>
      </T2>
    </section>
  )
}
