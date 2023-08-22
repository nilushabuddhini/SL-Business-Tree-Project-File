import { useEffect } from "react";
import Items from '../components/description'
import AddItems from "../components/Additems";
import { useItemsContext } from "../hooks/useitemscontext";
import { useAuthContext } from '../hooks/useAuthContext'

function Home(){
    const {items, dispatch} = useItemsContext()
    const {user} = useAuthContext()

    useEffect(() =>{
      const fetchitems = async ()=>{
        const response = await fetch('/api/items', {
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
  
        if(response.ok){
          dispatch({type: 'SET_ITEMS', payload: json})
        }
      }

      if(user){
        fetchitems()
      }
      
    },[dispatch, user])
    return (
        <div className="hello">
          <div className="items-flex">
          {items && items.map((stores)=>(
            <Items key={stores._id} stores={stores}/>
          ))}
          </div>
        </div>
    );
}

export default Home