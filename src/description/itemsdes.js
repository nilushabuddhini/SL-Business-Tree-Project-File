import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { toast, ToastContainer } from "react-toastify"
import { useItemsContext } from "../hooks/useitemscontext"
import DisplayItems from "../components/description"

export function Description(){

  const {items, dispatch} = useItemsContext()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [cat, setCat] = useState(localStorage.getItem('cat'))
  const {user} = useAuthContext()

  var images = localStorage.getItem('order')
  var titles = localStorage.getItem('img')
  var prices = localStorage.getItem('prc')
  var phones = localStorage.getItem('con')
  var descriptions = localStorage.getItem('des')
  var idnum = localStorage.getItem('id')

  useEffect(() =>{
    setLoading(true)
    const fetchitems = async ()=>{
      const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/items')
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'SET_ITEMS', payload: json})
        setData(json)
        const filt = items.filter(b => {return b.category === category && b._id !== idnum})
        setData(filt)
      }
      setLoading(false)
    }
      fetchitems()
    
  },[dispatch, user])



    const navigate = useNavigate()



    const [img, setImg] = useState('')
    const [title, setTitle] = useState(titles)
    const [prize, setPrize] = useState(prices)
    const [phone, setPhone] = useState(phones)
    const [description, setDescription] = useState(descriptions)
    const [image, setImage] = useState(images)
    const [error, setError] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [itemsLeft, setItemsLeft] = useState(localStorage.getItem('itemsLeft'))
    const [category, setCategory] = useState(localStorage.getItem('category'))
    const [id, setId] = useState(localStorage.getItem('id'))
  
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
        if(response.ok){
            toast.success('Product added to cart')
          }
      }

      async function handleClick(e){

        e.preventDefault()

        

        const editItemsLeft = {itemsLeft}

        const response = await fetch('http://localhost:5000/api/items/'+id, {
          method:'PATCH',
          body:JSON.stringify(),
          headers:{
            'Access':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
        if(response.ok){
          console.log('fetched', json)
          navigate('/order')
          setItemsLeft(parseInt(itemsLeft))
        }
        if(!response.ok){
          setError(json.error)
        }
        localStorage.setItem('quan', quantity)
        
      }
    return(
      <div>
        <div className="container text-center border border-2 mt-4 mb-4">
            <img src={images} alt="item" className="w-50 mx-auto"/>
            <hr />
            <h1>{titles}</h1>
            <hr />
            <h4>Price : {prices} LKR</h4>
            <hr />
            <h6>{descriptions}</h6>
            <hr />
            <h6>Category : {category}</h6>
            <small>Contact {phones} for more details</small>
            <br /> <br />
            <div className="btn-group">
              <Link to='/order' className="btn btn-primary">Buy now</Link>
              <ToastContainer
                position={"top-right"}
            />
              <button onClick={handleSubmit} className="btn btn-success">Add to cart</button>
            </div>
            <br />
            <br /><br />
        </div>
        <div className="container">
             <h5 className="text-secondary">Simillar products</h5>
             <div className="album py-5 bg-body-tertiary" id="items-album">
        <p className="text-center">{loading==true?'Loading Items...':null}</p>
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
             {data && data.map((stores)=>(
            <DisplayItems key={stores._id} stores={stores}/>
          ))}
          </div>
          </div>
          </div>
            </div>
            <br /><br />
        </div>
       
    )
}
