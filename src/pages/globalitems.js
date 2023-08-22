import { useState, useEffect } from 'react'
import GlobalThings from '../components/Glabaldescription'

function Global(){
    const [global, setGlobal] = useState([])

    useEffect(()=>{
        const fetchglobal = async () => {
            const response = await fetch('/api/global')
            const json =await response.json()

            if(response.ok){
                setGlobal(json)
            }
        }
        fetchglobal()
    }, [])

    return(
        <div className="global">
            {global && global.map((globalitems)=>(
                <GlobalThings key={globalitems._id} globalitems={globalitems}/>
            ))}
        </div>
    )
}

export default Global