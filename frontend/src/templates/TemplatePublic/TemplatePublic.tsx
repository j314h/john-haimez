import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../_components'

export function TemplatePublic() {
  return (
    <>
      <Header />
      <main
        className='
        flex-1 px-4 py-8
        bg-prim dark:bg-prim-d
        text-black dark:text-white'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
