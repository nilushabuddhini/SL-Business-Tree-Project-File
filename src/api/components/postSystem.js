import { useEffect, useState } from "react";
import Items from './item'

function PostSystem(){

    const [adress, setAdress] = useState('')
    const [idnum, setIdnum] = useState('')
    const [phonenum, setPhonenum] = useState('')
    const [img, setImg] = useState(localStorage.getItem('order'))
    const [title, setTitle] = useState(localStorage.getItem('img'))
    const [phoneOrder, setPhoneOrder] = useState(localStorage.getItem('con'))

    async function systemsub(e){

        e.preventDefault()

        const systems = {adress,idnum,phonenum,img,title,phoneOrder}

        const response = await fetch('http://localhost:5000/api/system', {
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
        window.location.replace('http://localhost:3000/')
        alert('Your Order added sucssesfully')

    }
    
    return(
        <div className="container mt-5 border border-3 p-5" style={{ textAlign: 'center' }}>
        <form className="system" onSubmit={systemsub}>
            <label>Enter your Adress</label>
            <br/><br/><br/>
            <textarea onChange={e=>setAdress(e.target.value)} className="form-control" style={{ textAlign:'center', resize:'none' }}/>
            <br/><br/><br/>
            <label>Enter your Id</label>
            <br/><br/><br/>
            <textarea onChange={e=>setIdnum(e.target.value)} className="form-control" style={{ textAlign:'center', resize:'none' }}/>
            <br/><br/><br/>
            <label>Enter your phone Number</label>
            <br/><br/><br/>
            <textarea onChange={e=>setPhonenum(e.target.value)} className="form-control" style={{ textAlign:'center', resize:'none' }}/>
            <br /><br />

            <button className="btn btn-outline-success">Submit</button>
        </form>
        <br /><br /><br /><br /><br /><br /><br />
        <Items/>
        </div>
    )
}

export default PostSystem