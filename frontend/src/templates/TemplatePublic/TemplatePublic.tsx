import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Organisms/Footer/Footer'
import { Header } from '../../components/Organisms/Header/Header'

export function TemplatePublic() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
