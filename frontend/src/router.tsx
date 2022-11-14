import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { TemplatePublic } from './templates/TemplatePublic/TemplatePublic'

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
    ],
  },

  // private
])
