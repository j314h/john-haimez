import { SectionMenuSide } from '@organisms/section-menu-side/section-menu-side'
import { Header } from '@organisms/header/header'
import { store } from '@store/store'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function TemplatePrivate() {
  const { myRef } = store.outsideClick.useOutSideClick()
  const stateMenu = store.app.useMenuSideActivate()

  return (
    <>
      <Header />
      <main
        ref={myRef}
        className='
        flex-1 flex
        bg-primary dark:bg-primary-dark
        text-black dark:text-white'>
        {/* menu side */}
        <SectionMenuSide />

        {/* content */}
        <section
          className={`
          flex-1 
          ${stateMenu ? 'ml-64' : 'ml-16'} 
          px-2 py-4 md:px-4 md:py-8`}>
          <Outlet />
        </section>
      </main>
      <ToastContainer />
    </>
  )
}
