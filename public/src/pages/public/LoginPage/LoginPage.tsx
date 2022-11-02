import { Component } from 'solid-js'
import { FormLogin } from '../../../components/Molecules/Forms/FormLogin/FormLogin'
import { SectionLogin } from '../../../components/Organisms/SectionLogin/SectionLogin'

export const LoginPage: Component = () => {
  return (
    <section>
      {/* title */}
      <h2 class='font-styling text-s8 sm:text-s9 md:text-s10 text-center'>
        Connexion
      </h2>

      {/* connexion */}
      <SectionLogin />
    </section>
  )
}
