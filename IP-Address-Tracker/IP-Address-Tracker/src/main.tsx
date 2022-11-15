import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrackerApp } from './TrackerApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrackerApp />
  </React.StrictMode>
)
