import { useState } from "react";
import FileBase64 from 'react-file-base64'
import { useItemsContext } from "../hooks/useitemscontext";
import { useAuthContext } from "../hooks/useAuthContext";

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

    async function handlesubmit(e){

        
        e.preventDefault()

        const items = {title,prize,description,phone,image,createId}

        if(!user){
            setError('You must be logged in')
            return
        }

        const response = await fetch('/api/items',{
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
            console.log(json)
            dispatch({type: 'CREATE_ITEMS' ,  payload: json})
        }

        window.location.replace('/')


    }

    return(
        <div>
        <form className="submit" onSubmit={handlesubmit}>
           <h2>Add your item from here</h2>
           <label>Enter your product name</label>
           <br/><br/> 
           <textarea className="product" rows={2} onChange={e => setTitle(e.target.value)}/>
           <br/><br/> 
           <label>Enter The prize</label>
           <br/><br/> 
           <input type="number" onChange={e => setPrize(e.target.value)} className="prize"/>
           <br/><br/> 
           <label>Type about your product</label>
           <br/><br/> 
           <textarea className="des" rows={4} onChange={e => setDescription(e.target.value)}/>
           <br/><br/>
           <label>Enter Your phone number</label>
           <br/><br/> 
           <textarea className="des" rows={1} onChange={e => setPhone(e.target.value)}/>
           <br/><br/>
           <label>Select The Image</label>
           <br/><br/> 
           <FileBase64 multiple={ false } onDone={({base64})=> setImage(base64)}/>
           <br/><br/>
           <button className="submit-btn">Submit</button>
           <br /><br />
           {error && <div className="error">{error}</div>}
        </form>
        <br/><br/><br/>
        </div>
    )

}

export default AddItems