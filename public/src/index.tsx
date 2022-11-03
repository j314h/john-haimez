/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import './styles/index.css'
import { App } from './pages/App'
import { httpInterceptor } from './shared/http/http.interceptor'
import { authAction } from './store/auth/auth.action'

httpInterceptor.request()
httpInterceptor.response()
authAction.checkTokenLocal()

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
