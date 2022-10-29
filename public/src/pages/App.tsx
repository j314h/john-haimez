import { Route, Routes } from '@solidjs/router'
import type { Component } from 'solid-js'
import { TemplatePrivate } from '../templates/TemplatePrivate/TemplatePrivate'
import { TemplatePublic } from '../templates/TemplatePublic/TemplatePublic'
import { DashboardPage } from './private/Dashboard/DashboardPage'
import { HomePage } from './public/HomePage/HomePage'

export const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/dashboard' component={TemplatePrivate}>
          <Route path='/' component={DashboardPage} />
        </Route>
        <Route path='/' component={TemplatePublic}>
          <Route path='/' component={HomePage} />
        </Route>
      </Routes>
    </>
  )
}
