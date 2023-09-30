import { Link } from 'react-router-dom'
import { useItemsContext } from '../hooks/useitemscontext'
import { useAuthContext } from '../hooks/useAuthContext' 
import { useState } from 'react'

const MyItemsDetails = ({ my }) => {

    const [showing, setShowing] = useState(true)

    const { dispatch } = useItemsContext()
    const { user } = useAuthContext()
    

    const handleDelete = async () => {
      setShowing(true)
        const responses = await fetch(`https://sl-buisness-tree-backend.onrender.com/api/items/${my._id}`, {
          method:'DELETE',
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        })
        const json = await responses.json()
    
        if(responses.ok){
          dispatch({ type:'DELETE_ITEMS', payload:json })
        }
        setShowing(false)
      }

    return(
      <div>
        {showing===true?
        <div className="col">
            <div className="card shadow-sm">
                <img src={my.image} alt="" className="imgdes"/>
                <div className="card-body">
                    <h3 className="text-secondary">{my.title}</h3>
                    <h4 className="text-warning">{my.prize} LKR</h4>
                    <small className="text-success">{my.itemsLeft} {my.itemsLeft >1? 'items left':'item left'}</small>

                    <br /><br />
                
                <div className='d-flex justify-content-between align-items-center'>
                <div className="btn-group">
                    <Link to={`/update/${my._id}`} className='btn btn-outline-info'>Update</Link>
                    <button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
                </div>
                </div>
                </div>
            </div>
        </div>
:null}
        </div>
    )
}

export default MyItemsDetails