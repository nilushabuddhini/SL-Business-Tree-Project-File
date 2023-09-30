import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayItems from "../components/description";
import { useItemsContext } from "../hooks/useitemscontext";
import { useAuthContext } from "../hooks/useAuthContext";


export default function Categories(){

    const { name } = useParams()

    const {items, dispatch} = useItemsContext()
    const {user} = useAuthContext()

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [cat, setCat] = useState(localStorage.getItem('cat'))

    useEffect(() =>{
      setLoading(true)
      const fetchitems = async ()=>{
        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/items',{
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        })
        const json = await response.json()
  
        if(response.ok){
          dispatch({type: 'SET_ITEMS', payload: json})
          setData(json)
          const filt = items.filter(b => {return b.category === name})
          setData(filt)
        }
        setLoading(false)
      }
        fetchitems()
      
    },[dispatch, user])

    

    return(
    <div>
        <h5 className="text-center">Category - {name}</h5>
        {loading===false?

        <p className="text-center">{data.length} {data.length === 1?'item found':'items found'}</p>

        :null
        
      }

        <div className="album py-5 bg-body-tertiary" id="items-album">
        <p className="text-center">{loading==true?'Loading Items...':null}</p>
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">

          {data && data.map((stores)=>(
            <DisplayItems key={stores._id} stores={stores}/>
          ))}
        </div>
        </div>
        </div>
    </div>
    )
}