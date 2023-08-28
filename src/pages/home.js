import { useEffect, useState } from "react";
import Items from '../components/description'
import { useItemsContext } from "../hooks/useitemscontext";
import { useAuthContext } from '../hooks/useAuthContext';
import Carousel from '../components/carousel'
import Footer from "../components/footer";
import { Status } from '../contents/status'

function Home(){
    const {items, dispatch} = useItemsContext()
    const {user} = useAuthContext()

    useEffect(() =>{
      const fetchitems = async ()=>{
        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/items', {
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
        <div>

          <Carousel/>
        <div className="album py-5 bg-body-tertiary" id="items-album">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          {items && items.map((stores)=>(
            <Items key={stores._id} stores={stores}/>
          ))}
        </div>
        </div>
        </div>
        <Footer/>


        </div>
    );
}

export default Home