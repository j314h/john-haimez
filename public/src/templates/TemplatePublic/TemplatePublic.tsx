import { Component, onMount } from 'solid-js'
import { Outlet } from '@solidjs/router'
import { Header } from '../../components/Organisms/Header/Header'
import './TemplatePublic.css'
import { refMenus } from '../../store/app/app.store'
import { Footer } from '../../components/Organisms/Footer/footer'

export const TemplatePublic: Component = () => {
  return (
    <>
      <Header />
      <main class='template-public' ref={refMenus}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
