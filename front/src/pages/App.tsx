import { AuthGuard } from '@shared-app/guard/auth-guard'
import { LoginGuard } from '@shared-app/guard/login-guard'
import { store } from '@store/store'
import TemplatePrivate from '@templates/template-private'
import { TemplatePublic } from '@templates/template-public'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { CompetencePage } from './private/competence-page'
import { DashboardPage } from './private/dashboard-page'
import { ProfilePage } from './private/profile-page'
import { SocialPage } from './private/social-page'
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
          <Route path='/dashboard/profile' element={<ProfilePage />} />
          <Route path='/dashboard/competence' element={<CompetencePage />} />
          <Route path='/dashboard/project' element={<ProjectsPage />} />
          <Route path='/dashboard/social' element={<SocialPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
