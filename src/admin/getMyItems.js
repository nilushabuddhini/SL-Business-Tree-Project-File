import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import MyItemsDetails from './myItemsDetails'
import { Helmet } from 'react-helmet'

const Private = () => {

    const {user} = useAuthContext()

    const [mine, setMine] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        const fetchPrivate = async () => {
            const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/items/mine', {
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json() 

            if(response.ok){
                setMine(json)
            }
            setLoading(false)
        }
        fetchPrivate()
    },[user])

    return(
        <div className="container">
            <div>
                <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
                <meta name="keywords" content="SL Business Tree"/>
                <meta name="author" content="Sl Business Tree"/>

                <title>My items | SL Business Tree</title>
                </Helmet>
            </div>
            <div className="container mt-5">
            <div className="container mt-5">
            <div className="btn-group mt-5 mb-3">
            <Link to='/dashboard' className="btn btn-success">Look for orders</Link> 
            <Link to='/mine'className="btn btn-secondary">Your Items</Link>
            <Link to='/global' className="btn btn-primary">Post ad</Link>
            <Link className="btn btn-warning" to='/create/category'>Create Category</Link>
            </div>
            </div>
            </div>
            <h1>My items</h1>
            <div className="album py-5 bg-body-tertiary" id="items-album">
            <p className="text-center">{loading===true?'Loading Items...':''}</p>
            <p className="text-center"></p>
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
            {mine && mine.map((my)=>(
                <MyItemsDetails key={my._id} my={my}/>
            ))}
        </div>
        </div>
        </div>
        </div>
    )
    
}

export default Private