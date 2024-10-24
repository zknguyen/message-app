import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './contexts/AuthContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>,
)
