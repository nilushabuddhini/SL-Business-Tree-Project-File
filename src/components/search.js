import Items from "./description"
import { useItemsContext } from "../hooks/useitemscontext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState, useEffect } from "react"

function Search(){

    const {items, dispatch} = useItemsContext()
    const {user} = useAuthContext()

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

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
        }
        setLoading(false)
      }
        fetchitems()
      
    },[dispatch, user])
    const Filter = (event)=>{
      if(event.target.value!==''){
        setData(data.filter(f => f.title.toLowerCase().includes(event.target.value.toLowerCase())))
      }else{
        setData(items)
      }

    }
    return(
        <div>
        <div className="bg bg-dark">
        <br />
        <div className="d-flex container">
    <input type="search" className="form-control"  placeholder="search..." onChange={e => Filter(e)}/>
    </div>
    <br /><br />
    </div>
    <div className="album py-5 bg-body-tertiary" id="items-album">
        <p className="text-center">{loading==true?'Loading Items...':null}</p>
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">

          {data && data.map((stores)=>(
            <Items key={stores._id} stores={stores}/>
          ))}
        </div>
        </div>
        </div>
    </div>

    )
}

export default Search