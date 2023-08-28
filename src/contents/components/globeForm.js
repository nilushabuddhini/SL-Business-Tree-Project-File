import { useState } from "react";

export function GlobalForm(){

    const [statusItem, setStatusItem] = useState('')

    const handleSubmit = async (e)=>{

        e.preventDefault()

        const globe = {statusItem}

        const response = await fetch('http://localhost:5000/api/global', {
            method: 'POST',
            body: JSON.stringify(globe),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(response.ok){
            setStatusItem('')
        }
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e=>setStatusItem(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

