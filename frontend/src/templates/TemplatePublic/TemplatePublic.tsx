import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, SpinnerLoader } from '../../_components'
import { AppService } from '../../_store'

export function TemplatePublic() {
  const activeLoader = AppService.useActiveLoaderGlobal()

  return (
    <>
      {activeLoader ? <SpinnerLoader /> : null}
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
