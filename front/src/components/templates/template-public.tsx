import { Footer } from '@organisms/footer/footer'
import { Header } from '@organisms/header/header'
import { store } from '@store/store'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function TemplatePublic() {
  const { myRef } = store.outsideClick.useOutSideClick()

  return (
    <>
      <Header />
      <main
        ref={myRef}
        className='
        flex-1 px-4 py-8
        bg-primary dark:bg-primary-dark
        text-black dark:text-white'>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}
