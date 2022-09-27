import { AuthGuard } from '@shared-app/guard/auth-guard'
import { LoginGuard } from '@shared-app/guard/login-guard'
import { store } from '@store/store'
import TemplatePrivate from '@templates/template-private'
import { TemplatePublic } from '@templates/template-public'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './app.css'
import { DashboardPage } from './private/dashboard-page'
import { ContactPage } from './public/contact-page'
import ForgotPasswordPage from './public/forgot-password-page'
import { HomePage } from './public/home-page'
import { LoginPage } from './public/login-page'
import { ProjectsPage } from './public/projects-page'

export function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if (store.token.verifiedConnected()) {
      navigate('/login')
    }
  }, [])

  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
        <Route element={<LoginGuard />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
