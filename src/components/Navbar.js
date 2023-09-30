import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";

function Navbar(){

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const [carts, setCarts] = useState([])
    
    useEffect(()=>{
        const federation = async ()=>{
            const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/cart', {
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                setCarts(json)
            }
        }
        if(user){
          federation()
        }
        
    },[user])

    const handleClick = () => {
        logout()
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
//   <header className="p-3 text-bg-dark pos fixed-top">
//     <div className="container">
//       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//         <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//           <img src="./icon.jpg" alt="" className="rounded-circle" style={{ width:'50px' }}/>
//           <h5 style={{ color:'white' }}>SL business Tree</h5>
//         </a>

//         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//           <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
//           <li><Link to='/dashboard' className="nav-link px-2 text-white">Dashboard</Link></li>
//           <li><a href="#" className="nav-link px-2 text-white">Orders</a></li>
//           <li><Link to='/cart' className="nav-link px-2 text-white">Cart</Link></li>
//           <li><a href="#" className="nav-link px-2 text-white">Chats</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">About</a></li>
//         </ul>

//         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//           <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" onChange={serch}/>
//         </form>

//         {!user && (

// <div className="text-end">
// <Link to='/login' className="btn btn-outline-primary me-2">Login</Link>
// <Link to='/signup' className="btn btn-warning">Sign-up</Link>
// </div>
//         )}
//         {user && (
//           <div className="text-end">
//             <p className="mt-3"><span>{user.email} : {user.email == 'slbuisnesstree@samern.dev'||user.email == 'slbuisnesstree@gmail.com'? <small style={{ color: 'green' }}>developer</small>:<small style={{ color: 'red' }}>user</small>}</span> <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Logout</button></p>
//           </div>
//         )}


//       </div>
//     </div>
//   </header>
<header data-bs-theme="dark">
<div className="collapse text-bg-dark" id="navbarHeader">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 col-md-7 py-4">
      <h4 className="text-success">Welcome to SL Business Tree</h4>
      <br />
      <div className="d-flex ml-2">
      <Link to='/' className="text-decoration-none text-white mx-3" style={{ fontSize:'18px' }}>Home</Link>
      <br /><br />
      <Link to='/dashboard' className="text-decoration-none text-white mx-3" style={{ fontSize:'18px' }}>Dashboard</Link>
      <br /><br />

      <Link to='/cart' className="text-decoration-none text-white mx-3" style={{ fontSize:'18px' }}>Cart<sup class="badge badge-pill bg-danger align-text-bottom text-dark rounded-circle">{carts.length}</sup></Link>
      
      <br /><br />
      <Link to='/chat' className="text-decoration-none text-white mx-3" style={{ fontSize:'18px' }}>Chat</Link>
      </div>
      </div>
      <div className="col-sm-4 offset-md-1 py-4">
              {!user && (

<div className="text-end">
<Link to='/login' className="btn btn-outline-primary me-2">Login</Link>
<Link to='/signup' className="btn btn-warning">Sign-up</Link>
 </div>
         )}
        {user && (
          <div className="text-end">
             <p className="mt-3"><span>{user.email} : {user.email == 'slbusinesstree@slbt.dev'||user.email == 'slbusinesstree@gmail.com'? <small style={{ color: 'green' }}>developer</small>:<small style={{ color: 'red' }}>user</small>}</span> <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Logout</button></p>
           </div>
      )}

      </div>
    </div>
  </div>
</div>
<div className="navbar navbar-dark bg-dark shadow-sm">
  <div className="container">
    <a href="/" className="navbar-brand d-flex align-items-center">
      <img src="./icon.jpg" alt="" className="rounded-circle" style={{ width:'60px'}}/>
      <strong className="ml-3">SL Business Tree</strong>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</div>
</header>

    )
}

export default Navbar