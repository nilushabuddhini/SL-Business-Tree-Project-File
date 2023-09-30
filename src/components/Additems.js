import { useState, useEffect } from "react";
import { useItemsContext } from "../hooks/useitemscontext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

function AddItems(){

    const { dispatch } = useItemsContext()
    const {user} = useAuthContext()

    const [title, setTitle] = useState('')
    const [prize, setPrize] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')
    const [createId, setCreateId] = useState('')
    const [error, setError] = useState('')
    const [itemsLeft, setItemsLeft] = useState('')
    const [category, setCategory] = useState('fashion')
    const [loading, setLoading] = useState(false)
    const [categ, setCateg] = useState([])

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

    async function handlesubmit(e){

        
        e.preventDefault()

        setLoading(true)

        // const formdata = new FormData()
        // let filename = null
        // filename = Date.now() + image
        // formdata.append('filename', filename)
        // formdata.append('image', image)

        // await fetch('http://localhost:5000/upload/image', {
        //     method:'POST',
        //     body:formdata,
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Authorization':`Bearer ${user.token}`
        //     }
        // })

        const items = {
            title,
            prize,
            description,
            phone,
            image,
            createId,
            itemsLeft,
            category
        }

        if(!user){
            setError('You must be logged in')
            return
        }

        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/admin',{
            method : 'POST',
            body : JSON.stringify(items),
            headers : {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${user.token}`
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
            setCreateId('')
            setCategory('')
            console.log(json)
            dispatch({type: 'CREATE_ITEMS' ,  payload: json})
        }

        
        setLoading(false)
        if(!error){
            window.location.replace('/')
        }
    }

    return(
        <div>
            <div>
                <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
                <meta name="keywords" content="SL Business Tree"/>
                <meta name="author" content="Sl Business Tree"/>

                <title>Post ad | SL Business Tree</title>
                </Helmet>
            </div>
            <div className="container mt-5">
            <div className="btn-group mt-5 mb-3">
            <Link to='/dashboard' className="btn btn-success">Look for orders</Link>

            <Link to='/mine'className="btn btn-secondary">Your Items</Link>
            <Link to='/global' className="btn btn-primary">Post ad</Link>
            <Link className="btn btn-warning" to='/create/category'>Create Category</Link>
            </div>
            </div>
        <div className="container" style={{ textAlign:'center' }}>
        <form className="submit" onSubmit={handlesubmit}>
           <h2>Add your item from here</h2>
           <label>Enter your product name</label>
           <br/><br/> 
           <textarea className="form-control" style={{ resize:'none ', textAlign:'center'}} rows={2} onChange={e => setTitle(e.target.value)}/>
           <br/><br/> 
           <label>Enter The prize</label>
           <br/><br/> 
           <input type="number" onChange={e => setPrize(e.target.value)} className="form-control" style={{ textAlign:'center' }}/>
           <br/><br/> 
           <label>Type about your product</label>
           <br/><br/> 
           <textarea className="form-control" style={{ resize:'none ', textAlign:'center'}} rows={4} onChange={e => setDescription(e.target.value)}/>
           <br/><br/>
           <label>Enter Your phone number</label>
           <br/><br/> 
           <textarea className="form-control" style={{ resize:'none ', textAlign:'center'}} rows={1} onChange={e => setPhone(e.target.value)}/>
           <br/><br/>
           <label>Select The Image</label>
           <br/><br/> 
           {/* <FileBase64 multiple={ false } onDone={({base64})=> setImage(base64)} className="form-control" id="forFile"/> */}
           <input type="file" onChange={convertToBase}/>
           <br/><br/>
           <label>Items Left?</label>
           <br/><br/> 
           <input type="number" className="form-control" onChange={e => setItemsLeft(e.target.value)}/>
           <br/><br/>
           <label htmlFor="">Select the category</label>
           <br /><br />
           <select onChange={e=> setCategory(e.target.value)} className="form-control text-center">
            <option value="fashion">Fashion</option>
            <option value="home">Home decor and furnitures</option>
            <option value="education">Education</option>
            <option value="electrics">Electrics</option>
            <option value="foods">Foods</option>
            {categ && categ.map((catego) => (
                <option key={catego._id} value={catego.category} >{catego.category}</option>
            ))}
           </select>
           <br /><br />
           <button className="btn btn-outline-success">Submit</button>
           <br /><br />
           <p className="text-center">{loading==true?'Crating your item...':''}</p>
           <br /><br />
           {error && <div className="error">{error}</div>}
        </form>
        <br/><br/><br/>
        </div>
        </div>
    )

}

export default AddItems