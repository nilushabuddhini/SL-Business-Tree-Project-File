import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await signup(email, password);  
    }

    return(
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>Enter your Email</label>
            <br /><br />
            <input type="email" onChange={e => setEmail(e.target.value)} className="signup"/>
            <br /><br /><br />
            <label>Enter your Password</label>
            <br /><br />
            <input type="password" onChange={e => setPassword(e.target.value)} className="signup"/>
            <br /><br />
            <button className="auth-btn">Signup</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup