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
        // <form className="login-form" onSubmit={handleSubmit}>
        //     <label>Enter your Email</label>
        //     <br /><br />
        //     <input type="email" onChange={e => setEmail(e.target.value)} className="signup"/>
        //     <br /><br /><br />
        //     <label>Enter your Password</label>
        //     <br /><br />
        //     <input type="password" onChange={e => setPassword(e.target.value)} className="signup"/>
        //     <br /><br />
        //     <button className="auth-btn">Login</button>
        //     {error && <div className="error">{error}</div>}
        // </form>
//         <main className="form-signin w-100 m-auto login">
//         <form onSubmit={handleSubmit}>
//     <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
//     <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

//     <div class="form-floating">
//       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
//       <label for="floatingInput">Email address</label>
      
//     </div>
//     <div class="form-floating">
//       <input type="password" class="form-control" id="floatingPassword" placeholder="Password"onChange={e=>setPassword(e.target.value)}/>
//       <label for="floatingPassword">Password</label>
//     </div>

//     <div class="form-check text-start my-3">
//       <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
//       <label class="form-check-label" for="flexCheckDefault">
//         Remember me
//       </label>
//     </div>
//     <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
//     <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
//   </form>
//   </main>
<div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">Log in</h1>
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
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Log in</button>
          <small class="text-body-secondary">By clicking Log in, you agree to the terms of use.</small>
          <hr class="my-4"/>
          {error && <div>{error}</div>}


        </form>
      </div>
    </div>
    )
}

export default Login