import { Component } from 'solid-js'
import { Outlet } from '@solidjs/router'

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
