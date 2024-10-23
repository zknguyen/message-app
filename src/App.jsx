import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/Auth/Login.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import Profile from './pages/Profile/Profile.jsx'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
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
