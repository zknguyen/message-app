import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from '../../pages/auth/Logout.jsx'
import './Sidebar.css'

const Sidebar = () => {
    const { isAuthenticated } = useAuth0();
    
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <div id="sidebar">
                <Link to="/home">Home</Link><br />
                <Link to="/profile">Profile</Link><br />
                <Logout />
            </div>
        </>
    )
}

export default Sidebar