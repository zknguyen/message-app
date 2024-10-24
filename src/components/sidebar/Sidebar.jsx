import { Link } from "react-router-dom"
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div id="sidebar">
                <Link to="/home">Home</Link><br/>
                <Link to="/profile">Profile</Link><br/>
                <Link to="/">Log Out</Link><br/>
            </div>
        </>
    )
}

export default Sidebar