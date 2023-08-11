import { useState } from "react";

function AddItems(){

    const [title, setTitle] = useState('')
    const [prize, setPrize] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')

    async function handlesubmit(e){

        e.preventDefault()

        const items = {title,prize,description,phone}

        const response = await fetch('/api/items',{
            method : 'POST',
            body : JSON.stringify(items),
            headers : {
                'Content-Type':'application/json'
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
            console.log(json)
        }

        window.location.reload()

    }

    return(
        <form className="submit" onSubmit={handlesubmit}>
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
           <button className="submit-btn">Submit</button>
        </form>
    )

}

export default AddItems