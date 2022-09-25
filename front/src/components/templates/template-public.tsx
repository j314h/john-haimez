import React from 'react'
import { Outlet } from 'react-router-dom'

export function TemplatePublic() {
  return (
    <>
      <header>header</header>
      <main
        className='
        flex-1 px-4 py-8
        bg-fond_claire dark:bg-fond_dark
        text-black dark:text-white'>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  )
}
