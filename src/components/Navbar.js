import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar(){

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const serch = async (e) => {
      console.log(e.target.value)
    }

    const handleClick = () => {
        logout()
    }
    const handle = () => {
        window.location.replace('http://localhost:3000/login')
    }
    const handleing = () => {
        window.location.replace('http://localhost:3000/signup')
    }

    return(
  //       <div className="nav">
            
  //           <div class="container">
  //   <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  //     <div class="col-md-3 mb-2 mb-md-0">
  //       <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
  //         {/* <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg> */}
  //         <h2>SL Buisness Tree</h2>
  //       </a>
  //     </div>

  //     <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
  //       <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
  //       <li><a href="http://localhost:3000/global" class="nav-link px-2">Add your product</a></li>
  //       <li><a href="#" class="nav-link px-2">Pricing</a></li>
  //       <li><a href="#" class="nav-link px-2">FAQs</a></li>
  //       <li><a href="#" class="nav-link px-2">About</a></li>
  //     </ul>
  //    {!user && (
  //             <div class="col-md-3 text-end">
  //             <button type="button" class="btn btn-outline-primary me-2" onClick={handle}>Login</button>
  //             <button type="button" class="btn btn-primary" onClick={handleing}>Sign-up</button>
  //           </div>
  //    )}
  //   {user && (
  //             <div class="col-md-3 text-end">
  //               <span>{user.email}</span>
  //               <button className="btn btn-outline-primary me-2" onClick={handleClick}>Logout</button>

  //           </div>
  //    )}

  //   </header>
  // </div>
  //           </div>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="./icon.jpg" alt="" className="rounded-circle" style={{ width:'50px' }}/>
          <h5 style={{ color:'white' }}>SL buisness Tree</h5>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="http://localhost:3000/global" class="nav-link px-2 text-white">Add your product</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" onChange={serch}/>
        </form>

        {!user && (

<div class="text-end">
<button type="button" className="btn btn-outline-light me-2" onClick={handle}>Login</button>
<button type="button" className="btn btn-warning" onClick={handleing}>Sign-up</button>
</div>
        )}
        {user && (
          <div className="text-end">
            <p className="mt-3"><span>{user.email} : {user.email == 'slbuisnesstree@samern.dev'? <small style={{ color: 'green' }}>developer</small>:<small style={{ color: 'red' }}>user</small>}</span> <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Logout</button></p>
          </div>
        )}


      </div>
    </div>
  </header>
    )
}

export default Navbar