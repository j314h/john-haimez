import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'
import './TemplatePrivate.css'

export const TemplatePrivate: Component = () => {
  return (
    <>
      <h1>Je suis le title private</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}
