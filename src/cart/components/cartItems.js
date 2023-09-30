import { useAuthContext } from "../../hooks/useAuthContext"
import { useItemsContext } from "../../hooks/useitemscontext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function CartItems({ cart }){

    const [showing, setShowing] = useState(true)

    const navigate = useNavigate()

    const { user } = useAuthContext()
    const { dispatch } = useItemsContext()

    const handleDelete = async () => {
        setShowing(true)
        const response = await fetch(`https://sl-buisness-tree-backend.onrender.com/api/cart/${cart._id}`, {
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            console.log('Deleted item is', json)

        }
        navigate('/cart')
        setShowing(false)
        // alert('Go to home page and check again, Your item will be deleted')
    } 

    return(
        <div>
        {showing===true?
        <div className="col">
            <div className="card shadow-sm">
                <img src={cart.image} alt="" className="imgdes"/>
                <div className="card-body">
                    <h3 className="text-secondary">{cart.title}</h3>
                    <h5 className="text-warning">{cart.prize} LKR</h5>
                    <small className="text-primary">contact <strong className="text-success">{cart.phone}</strong> for more details</small>
                    <br /><br />
                    <button className="btn btn-danger" onClick={handleDelete}>Remove</button>
                </div>
            </div>
        </div>
        :null}
        </div>

    )
}