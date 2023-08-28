import { useState, useEffect } from "react"
import GetSystem from "./components/getSystem"

function GetOrder(){
    
    const [back, setBack] = useState([])

    useEffect(()=>{

        const fetchsystem = async ()=>{
            const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/system')
            const json = await response.json()

            if(response.ok){
                setBack(json)
            }
        }
        fetchsystem()
    },[])

    return(

        <div>
            {back && back.map((backend)=>(
            <GetSystem key={backend._id} backend={backend}/>
            ))}
        </div>

    )
}

export default GetOrder