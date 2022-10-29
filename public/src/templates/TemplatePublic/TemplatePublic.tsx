import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'
import { Header } from '../../components/Organisms/Header/Header'

export const TemplatePublic: Component = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
