import { useState, useEffect } from 'react'
import DisplayItems from '../components/description'

function TopRated(){

    const [topRated, setTopRated] = useState([])

    useEffect(()=>{
        const federation = async ()=>{
            const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/toprated')
            const json = await response.json()

            if(response.ok){
                setTopRated(json)
            }
        }
        federation()
    },[])

    return(
        <div className="album py-5 bg-body-tertiary">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-5 row-cols-md-3 g-3">
            {topRated && topRated.map((stores)=>(
                <DisplayItems key={stores._id} stores={stores}/> 
            ))}
        </div>
        </div>
        </div>
    )
}

export default TopRated