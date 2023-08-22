import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar(){

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <div className="nav">
            
            <h2 className="app-name">SL Buisness Tree</h2>
            <a href="/global" className="add-pg">Add your items</a>
            <nav>
                {user && (
                    <div>
                    <span className="email-of-user">{user.email}</span>
                    <button className="logout-btn" onClick={handleClick}>Logout</button>
                    </div>           
                )}

                {!user && (
                    <div className="auth-options">
      
                    <a href="/login">Login</a>
                    <a href="/signup">Signup</a>
                    </div>
                )}

            </nav>
            </div>
    )
}

export default Navbar