import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext" 

const Login = () => {
    const { setAuth } = useAuthContext();

    const handleLogin = () => {
        setAuth(true);
    }

    return (
        <>
            <div>
                <Link to="/home" onClick={handleLogin}>Login</Link>
            </div>
        </>
    )
}

export default Login