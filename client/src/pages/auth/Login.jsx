import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useAuth0 } from "@auth0/auth0-react"
import "./Login.css"

const Login = () => {
    const { setAuth } = useAuthContext();
    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
        setAuth(true);
        loginWithRedirect();
    }

    return (
        <>
            <div id="login">
                <Link to="/home" onClick={handleLogin}>Login</Link>
            </div>
            {/* <button onClick={handleLogin}>Log In</button> */}
        </>
    )
}

export default Login