import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import AppRoutes from './AppRoutes.jsx'
import AuthProvider from './components/auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <AppRoutes/>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
