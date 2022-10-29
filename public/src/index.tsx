/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import './styles/index.css'
import { App } from './pages/App'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
