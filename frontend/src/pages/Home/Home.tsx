import React from 'react'
import { LinkPrimary } from '../../components/Atoms/Links/LinkPrimary/LinkPrimary'

export function Home() {
  return (
    <section>
      <LinkPrimary link='/'>Go to google</LinkPrimary>
      <LinkPrimary link='/coucou'>Coucou</LinkPrimary>
    </section>
  )
}
