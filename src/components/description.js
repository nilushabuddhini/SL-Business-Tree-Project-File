import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

function DisplayItems({ stores }){

  const {user} = useAuthContext()

  const [img, setImg] = useState('')
  const [title, setTitle] = useState(stores.title)
  const [prize, setPrize] = useState(stores.prize)
  const [description, setDescription] = useState(stores.description)
  const [phone, setPhone] = useState(stores.phone)
  const [image, setImage] = useState(stores.image)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(stores.itemsLeft)

    async function handleSubmit(e){
      e.preventDefault()
      const cartItems = {title,prize,description,phone,image,quantity}
      const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/cart',{
        method:'POST',
        body:JSON.stringify(cartItems), 
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(!response.ok){
        setError(json.error)
        console.error(error);
      }
    }

    const handleClick = (e)=>{
        localStorage.setItem('order', stores.image)
        localStorage.setItem('img', stores.title)
        localStorage.setItem('prc', stores.prize)
        localStorage.setItem('con', stores.phone)
        localStorage.setItem('des', stores.description)
        localStorage.setItem('itemsLeft', stores.itemsLeft)
        localStorage.setItem('id',stores._id)
        localStorage.setItem('category', stores.category)

    }
    return(


      <Link to='/description' className='text-decoration-none'>


            <div className="col albumitem card-mage" onClick={handleClick}>
          <div className="card shadow-sm">
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <img src={stores.image} alt="" className="imgdes"/>
            <div className="card-body">
              <h3 className="card-text text-secondary">{stores.title}</h3>
              {/* <p className="card-text">{stores.description}</p> */}
              <h5 className="card-text text-warning">{stores.prize} LKR</h5>
              {/* <h6 className="card-text">Contact Now : {stores.phone}</h6> */}
              <div className="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div>
        </div>
        </Link>

        

    )
}

export default DisplayItems
