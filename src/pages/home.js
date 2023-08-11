import { useState, useEffect } from "react";
import Items from '../components/description'
import Navbar from "../components/Navbar";
import AddItems from "../components/Additems";

function Home(){
    const [items, setItems] = useState([])

    useEffect(() =>{
      const fetchitems = async ()=>{
        const response = await fetch('/api/items')
        const json = await response.json()
  
        if(response.ok){
          setItems(json)
        }
      }
      fetchitems()
    },[])
    return (
        <div className="hello">
          <div>
          <Navbar/>
          <br/><br/><br/><br/>
          <AddItems/>
          </div>
          {items && items.map((stores)=>(
            <Items key={stores._id} stores={stores}/>
          ))}
        </div>
    );
}

export default Home