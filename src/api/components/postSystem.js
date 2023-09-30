import { useEffect, useState } from "react";
import Items from './item'
import { useAuthContext } from "../../hooks/useAuthContext";
import {toast, ToastContainer} from 'react-toastify'
import Checkout from 'react-stripe-checkout'

import 'react-toastify/dist/ReactToastify.css'

function PostSystem(){

    const [adress, setAdress] = useState(localStorage.getItem('adress'))
    const [idnum, setIdnum] = useState('')
    const [phonenum, setPhonenum] = useState(localStorage.getItem('phone-number'))
    const [quantity, setQuantity] = useState(localStorage.getItem('quan'))
    const [img, setImg] = useState(localStorage.getItem('order'))
    const [title, setTitle] = useState(localStorage.getItem('img'))
    const [phoneOrder, setPhoneOrder] = useState(localStorage.getItem('con'))
    const [itemsLeft, setItemsLeft] = useState(localStorage.getItem('itemsLeft'))
    const [id, setId] = useState(localStorage.getItem('id'))

    const {user} = useAuthContext()

    async function systemsub(e){

        e.preventDefault()

        const systems = {adress,idnum,phonenum,img,title,phoneOrder,quantity}
        const editItemsLeft = {itemsLeft}

        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/system', {
            method:'POST',
            body:JSON.stringify(systems),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(response.ok){
            setAdress('')
            setIdnum('')
            setPhonenum('')

        }

        window.location.replace('/')
        toast.success('Your order added successfully')

    }
    
    return(
        <div className="container mt-5 border border-3 p-5 card shadow-sm" style={{ textAlign: 'center' }}>
        <form className="system" onSubmit={systemsub}> 
            <label>Enter your Adress</label>
            <br/><br/><br/>
            <textarea onChange={e=>setAdress(e.target.value)} defaultValue={localStorage.getItem('adress')} className="form-control" style={{ textAlign:'center', resize:'none' }}/>
            <br/><br/><br/>
            <label>Enter your Id</label>
            <br/><br/><br/>
            <textarea onChange={e=>setIdnum(e.target.value)} className="form-control" style={{ textAlign:'center', resize:'none' }}/>
            <br/><br/><br/>
            <label>Enter your phone Number</label>
            <br/><br/><br/>
            <textarea onChange={e=>setPhonenum(e.target.value)} defaultValue={localStorage.getItem('phone-number')} className="form-control" style={{ textAlign:'center', resize:'none' }}/>
            <br /><br /><br />
            <label htmlFor="">Enter the quantity</label>
            <input type="number" className="border border-secondary border-0 mx-2" style={{ width:'50px' }} onChange={e=>setQuantity(e.target.value)} placeholder="0"/>
            <br /><br />

            <Items/>
            <br />
            <button className="btn btn-outline-success">Submit</button>
            <ToastContainer
                position={"top-right"}
            />
        </form>

        </div>
    )
}

export default PostSystem