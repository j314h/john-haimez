import { createBrowserRouter } from 'react-router-dom'
import { TemplatePublic } from './templates/TemplatePublic/TemplatePublic'
import { Home, Contact, Project } from './_pages'

export const router = createBrowserRouter([
  // public
  {
    path: '/',
    element: <TemplatePublic />,
    children: [
      // home
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Project />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },

  // private
])
