import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Expose ENV on window for debugging in development
if (import.meta.env.DEV) {
  import('./config/env').then((m) => {
    window.ENV = m.ENV
    console.log('[DEV] Environment variables loaded:', m.ENV)
  })
}