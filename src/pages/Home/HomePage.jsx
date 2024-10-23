import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <div>
                <h1>Home</h1>
                <Link to="/profile">Profile</Link>
                <Link to="/">Log Out</Link>
            </div>
        </>
    )
}

export default HomePage