import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login.jsx'
import HomePage from './pages/home/HomePage.jsx'
import Profile from './pages/profile/Profile.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import config from '../config.js'

const App = () => {
    return (
        <Auth0Provider
            domain={config.AUTH0_PROVIDER_DOMAIN}
            clientId={config.AUTH0_PROVIDER_DOMAIN}
            authorizationParams={{
                redirect_uri: "http://localhost:8000/home"
            }}
        >
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Auth0Provider>
  )
}

export default App
