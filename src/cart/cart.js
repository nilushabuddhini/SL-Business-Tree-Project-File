import React, { useState, useEffect } from 'react'
import { CartItems } from './components/cartItems'
import { useAuthContext } from '../hooks/useAuthContext'
import { Helmet } from 'react-helmet'

export function Cart() {
    const [carts, setCarts] = useState([])
    const {user} = useAuthContext()
    
    useEffect(()=>{
        const federation = async ()=>{
            const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/cart', {
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                setCarts(json)
            }
        }
        federation()
    },[user])

        return (
        <div>
        <div>
            <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
            <meta name="keywords" content="SL Business Tree"/>
            <meta name="author" content="Sl Business Tree"/>

            <title>Cart | SL Business Tree</title>
            </Helmet>
        </div>
            <div className="album py-5 bg-body-tertiary">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {carts && carts.map((cart)=>(
                    <CartItems key={cart._id} cart={cart}/>
                ))}
            </div>
            </div>
            </div>
            </div>


        )
}
