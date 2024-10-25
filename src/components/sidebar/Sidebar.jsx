import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext.jsx'
import './Sidebar.css'

const Sidebar = () => {
    const { auth, setAuth } = useAuthContext();

    const handleLogout = () => {
        setAuth(false);
    }

    if (!auth) {
        return null;
    }

    return (
        <>
            <div id="sidebar">
                <Link to="/home">Home</Link><br/>
                <Link to="/profile">Profile</Link><br/>
                <Link to="/" onClick={handleLogout}>Log Out</Link><br/>
            </div>
        </>
    )
}

export default Sidebar