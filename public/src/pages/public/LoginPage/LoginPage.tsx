import { Component } from 'solid-js'
import { FormLogin } from '../../../components/Molecules/Forms/FormLogin/FormLogin'

export const LoginPage: Component = () => {
  return (
    <section>
      {/* title */}
      <h2 class='font-styling text-s8 sm:text-s9 md:text-s10 text-center'>
        Connexion
      </h2>

      {/* form connexion */}
      <FormLogin />
    </section>
  )
}
