import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/auth/Login.jsx'
import HomePage from './pages/home/HomePage.jsx'
import Profile from './pages/profile/Profile.jsx'

import Sidebar from './components/sidebar/Sidebar.jsx'
import { useState } from 'react'

const App = () => {
    // Change this to useContext (create a new context)
    const [auth, useAuth] = useState(false);

    return (
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
