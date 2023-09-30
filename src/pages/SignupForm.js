import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error} = useSignup()
    const [verifying, setVerifying] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        setVerifying(true)

        await signup(email, password);  

        setVerifying(false)

        if(!error){
        window.location.replace('/')
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
        <div >
          <div>
                          <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
                <meta name="keywords" content="SL Business Tree"/>
                <meta name="author" content="Sl Business Tree"/>

                <title>Sign-up | SL Business Tree</title>
                </Helmet>
            </div>
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
         <ol type='I'>
          <li>Password must be contain</li><ul>
            <li>Capital letters</li>
            <li>Numbers</li>
            <li>simple letters</li>
            <li>Symbols</li>
            </ul>
            <li>Password must contain 8 characters</li>
         </ol>
         <div class="form-floating mb-3">
            <input type='text' class="form-control rounded-3" id="floatingPassword" placeholder="Adress" onChange={e=>localStorage.setItem('adress', e.target.value)}/>
            <label for="floatingPassword">Adress</label>
         </div>
         <div class="form-floating mb-3">
            <input type="tel" class="form-control rounded-3" id="floatingPassword" placeholder="Phone number" onChange={e=>localStorage.setItem('phone-number', e.target.value)}/>
            <label for="floatingPassword">Phone number</label>
         </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4"/>

          <div className="text-end">{verifying===true?
            <button class="btn btn-primary" type="button" disabled>
              <span class="spinner-border spinner-border-sm mx-2 text-warning" role="status" aria-hidden="true"></span>
                Verifying...
            </button>
          :null}
          </div>
          {error && <div>{error}</div>}

        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
    </div>
    )
}

export default Signup