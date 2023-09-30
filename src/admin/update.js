import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FileBase64 from 'react-file-base64'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { useItemsContext } from '../hooks/useitemscontext'
import { Helmet } from 'react-helmet'

const Update = () => {
  const [title, setTitle] = useState('')
  const [prize, setPrize] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [itemsLeft, setItemsLeft] = useState('')
  const [category, setCategory] = useState('')
  const [item, setItem] = useState([])
  const [index, setIndex] = useState('')
  const [loading, setLoading] = useState(false)
  const [categ, setCateg] = useState([])

  const { id } = useParams()
  const { user } = useAuthContext()

  const { dispatch } = useItemsContext()

  const navigate = useNavigate()

  const convertToBase = (e) => {
    console.log(e)
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
        console.log(reader.result)
        setImage(reader.result)
    }
    reader.onerror = (error) => {
        console.log(error)
    }
}

  useEffect(()=>{
    const fetchOneItem = async () => {
      const responed = await fetch(`https://sl-buisness-tree-backend.onrender.com/api/items/${id}`, {
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })
      const json = await responed.json()
      if(responed.ok){
        setItem(json)
        setTitle(item.title)
        setPrize(item.prize)
        setDescription(item.description)
        setPhone(item.phone)
        setImage(item.image)
        setItemsLeft(item.itemsLeft)
        setCategory(item.category)
        setIndex(item._id)
      }
    }
    fetchOneItem()
  }, [id, user])

  
  useEffect(() => {

    const federation = async () => {
        setLoading(true)
        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/categories')
        const json = await response.json()
        if(response.ok){
            setCateg(json)
            console.log(json)
        }
        setLoading(false)
    }
    federation()
}, [])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const items = {title, prize, description, phone, image, itemsLeft, category}
    const response = await fetch(`https://sl-buisness-tree-backend.onrender.com/api/items/${id}`, {
      method:'PATCH',
      body:JSON.stringify(items),
      headers:{
        'Access':'application/json',
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setTitle('')
      setPrize('')
      setDescription('')
      setPhone('')
      setImage('')
      setItemsLeft('')
      console.log('fetched', json)
    }

    console.log('hello')

    navigate('/mine')
  }
  return (
   <div>
              <div>
                          <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
                <meta name="keywords" content="SL Business Tree"/>
                <meta name="author" content="Sl Business Tree"/>

                <title>Update item | SL Business Tree</title>
                </Helmet>
            </div>
      <div className="container mt-5">
      <div className="btn-group mt-5 mb-3">
        <Link to='/dashboard' className="btn btn-success">Look for orders</Link>
        <Link to='/mine' className="btn btn-secondary">Your Items</Link>
        <Link to='/global' className="btn btn-primary">Post ad</Link>
      </div>
      </div>
    <div className='container text-center mt-3 mb-5'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="update the title">Update your title</label>
        <br /><br />
        <input type="text" className='form-control' defaultValue={item.title} onChange={e=>setTitle(e.target.value)}/>
        <br /><br /><br />
        <label htmlFor="update the price">Enter the price</label>
        <br /><br />
        <input type="text" className='form-control' defaultValue={item.prize} onChange={e=>setPrize(e.target.value)}/>
        <br /><br /><br />
        <label htmlFor="update the description">Enter the description</label>
        <br /><br />
        <input type="text" className='form-control' defaultValue={item.description} onChange={e=>setDescription(e.target.value)}/>
        <br /><br /><br />
        <label htmlFor="update the description">Enter the phone number</label>
        <br /><br />
        <input type="text" className='form-control' defaultValue={item.phone} onChange={e=>setPhone(e.target.value)}/>
        <br /><br /><br />
        <label htmlFor="form">Update the image</label>
        <br /><br />
        {/* <FileBase64 multiple={false} onDone={({base64})=>setImage(base64)} className='form-control'/> */}
        <input type="file" name="" id="" onChange={convertToBase}/>
        <br /><br />
        <img src={item.image} alt="" />
        <br /><br /><br />
        <label>Update the items left?</label>
        <br /><br />
        <input type="number" className='form-control' defaultValue={item.itemsLeft} onChange={e => setItemsLeft(e.target.value)}/>
        <br /><br /><br />
        <label>Update the category</label>
        <br /><br />
        <select onChange={e=> setCategory(e.target.value)} defaultValue={item.category} className="form-control text-center">
            <option value="fashion">Fashion</option>
            <option value="home">Home decor and furnitures</option>
            <option value="education">Education</option>
            <option value="electrics">Electrics</option>
            <option value="foods">Foods</option>
            {categ && categ.map((catego) => (
                <option key={catego._id} value={catego.category} >{catego.category}</option>
            ))}
           </select>
        <br /><br /><br />
        <button type="submit" className='btn btn-outline-success'>Update</button>
      </form>

    </div>
    </div>
  )
}

export default Update