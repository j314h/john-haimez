import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'
import { Header } from '../../components/Organisms/Header/Header'
import './TemplatePublic.css'

export const TemplatePublic: Component = () => {
  return (
    <>
      <Header />
      <main class='template-public'>
        <Outlet />
      </main>
    </>
  )
}
