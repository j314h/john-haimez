import { Header } from '@organisms/header'
import { store } from '@store/store'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function TemplatePrivate() {
  const { myRef } = store.outsideClick.useOutSideClick()

  return (
    <>
      <Header />
      <main
        ref={myRef}
        className='
        flex-1 px-4 py-8
        bg-fond_claire dark:bg-fond_dark
        text-black dark:text-white'>
        <Outlet />
      </main>
    </>
  )
}
