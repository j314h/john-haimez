import { A } from '@solidjs/router'
import { Component } from 'solid-js'
import { refMenus } from '../../../../store/app/app.store'
import './LinkBrand.css'

export const LinkBrand: Component = () => {
  return (
    <A
      ref={refMenus}
      class='link-brand-principal'
      activeClass='link-brand-active'
      inactiveClass='link-brand-inactive'
      href='/'
      end>
      JH
    </A>
  )
}
