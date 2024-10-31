import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext" 
import "./Login.css"

const Login = () => {
    const { setAuth } = useAuthContext();

    const handleLogin = () => {
        setAuth(true);
    }

    return (
        <>
            <div id="login">
                <Link to="/home" onClick={handleLogin}>Login</Link>
            </div>
        </>
    )
}

export default Login