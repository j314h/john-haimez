import { TemplatePublic } from '@templates/template-public'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import { ContactPage } from './public/contact-page'
import ForgotPasswordPage from './public/forgot-password-page'
import { HomePage } from './public/home-page'
import { LoginPage } from './public/login-page'
import { ProjectsPage } from './public/projects-page'

export function App() {
  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  )
}
