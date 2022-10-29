import { A } from '@solidjs/router'
import { Component } from 'solid-js'
import './LinkBrand.css'

export const LinkBrand: Component = () => {
  return (
    <A
      class='link-brand-principal'
      activeClass='link-brand-active'
      inactiveClass='link-brand-inactive'
      href='/'
      end>
      JH
    </A>
  )
}
