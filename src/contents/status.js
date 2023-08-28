import { useState, useEffect } from 'react'
import { StatusDetails } from './components/globe'
import { GlobalForm } from './components/globeForm'

export function Status(){

    const [global, setGlobal] = useState([])
    
    useEffect(()=>{
        const federation = async () => {

            const response = await fetch('http://localhost:5000/api/global')
            const json = await response.json()

            if(response.ok){
                setGlobal(json)
            }
        }

        federation()
    }, [])

    return(
        <div className="container">
            {global && global.map((globe) => (
                <StatusDetails key={globe._id} globe={globe}/>
            ))}

            <GlobalForm/>

        </div>
    )
}
