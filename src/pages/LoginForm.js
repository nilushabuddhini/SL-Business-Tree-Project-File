import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isloading, error} = useLogin()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await login(email, password);
    }

    return(
        <form className="login-form" onSubmit={handleSubmit}>
            <label>Enter your Email</label>
            <br /><br />
            <input type="email" onChange={e => setEmail(e.target.value)} className="signup"/>
            <br /><br /><br />
            <label>Enter your Password</label>
            <br /><br />
            <input type="password" onChange={e => setPassword(e.target.value)} className="signup"/>
            <br /><br />
            <button className="auth-btn">Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login