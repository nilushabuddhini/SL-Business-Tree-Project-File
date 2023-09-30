import { useState, useEffect } from "react"
import GetSystem from "./components/getSystem"
import { Link } from "react-router-dom"

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
            <div className="album py-5 bg-body-tertiary">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            {back && back.map((backend)=>(
            <GetSystem key={backend._id} backend={backend}/>
            ))}
            </div>
            </div>
            </div>
        </div>

    )
}

export default GetOrder

