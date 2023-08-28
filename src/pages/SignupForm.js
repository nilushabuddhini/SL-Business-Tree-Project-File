import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await signup(email, password);  

        if(!error){
        window.location.replace('http://localhost:3000/')
        }
    }

    return(
        // <form className="signup-form" onSubmit={handleSubmit}>
        //     <label>Enter your Email</label>
        //     <br /><br />
        //     <input type="email" onChange={e => setEmail(e.target.value)} className="signup"/>
        //     <br /><br /><br />
        //     <label>Enter your Password</label>
        //     <br /><br />
        //     <input type="password" onChange={e => setPassword(e.target.value)} className="signup"/>
        //     <br /><br />
        //     <button className="auth-btn">Signup</button>
        //     {error && <div className="error">{error}</div>}
        // </form>
        <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">Sign up</h1>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="" onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/> 
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
         </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4"/>

          {error && <div>{error}</div>}

        </form>
      </div>
    </div>
    )
}

export default Signup