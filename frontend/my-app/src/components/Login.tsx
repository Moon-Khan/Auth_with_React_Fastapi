import React, { useContext, useState } from "react";
import { login_auth } from "./Auth";
import { authContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const auth = useContext(authContext)
    const navigate = useNavigate()

    const handleLogin = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const tokenData = await login_auth(name, password);
            auth?.login(tokenData.access_token);
            navigate("/home");
        } catch (err: any) {
            setError(err.response?.data?.detail || "Login failed")
            console.error("Login failed", err);
        }

    }

    return (
        <div>
            <h2>Login</h2>
            <p>{error}</p>

            <form onSubmit={handleLogin}>
                <div> <label >Username: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name..." required></input>
                </div>
                <div> <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password..." required></input>
                </div>

                <button type="submit" >login</button>
            </form>



        </div>
    )
}

export default Login;