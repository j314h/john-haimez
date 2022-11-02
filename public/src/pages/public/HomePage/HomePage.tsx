import type { Component } from 'solid-js'
import { SectionProfilePublic } from '../../../components/Organisms/SectionProfilePublic/SectionProfilePublic'

export const HomePage: Component = () => {
  return (
    <section>
      {/* profile */}
      <SectionProfilePublic />
    </section>
  )
}
