import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'
import './TemplatePrivate.css'
import { Header } from '../../components/Organisms/Header/Header'
import { refMenus } from '../../store/app/app.store'

export const TemplatePrivate: Component = () => {
  return (
    <>
      <Header />
      <main class='template-private' ref={refMenus}>
        <Outlet />
      </main>
    </>
  )
}
