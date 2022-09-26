import React from 'react'
import ReactDOM from 'react-dom/client'
import { httpInterceptor } from '@shared-app/http/http.interceptor'
import { store } from '@store/store'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import { App } from './pages/app'
import reportWebVitals from './reportWebVitals'

httpInterceptor.request()
httpInterceptor.response()
store.darkmode.startCheckDarkMode()
store.token.verifiedConnected()

const root = ReactDOM.createRoot(document.querySelector('#root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
