import { useEffect, useState } from "react";

function PostSystem(){

    const [adress, setAdress] = useState('')
    const [idnum, setIdnum] = useState('')
    const [phonenum, setPhonenum] = useState('')
    const [order, setOrder] = useState('http://localhost:5000/'+localStorage.getItem('order'))

    async function systemsub(e){

        e.preventDefault()

        const systems = {adress,idnum,phonenum,order}

        const response = await fetch('/api/system', {
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
        <form className="system" onSubmit={systemsub}>
            <label>Enter your Adress</label>
            <br/><br/><br/>
            <textarea onChange={e=>setAdress(e.target.value)} className="adress-txt"/>
            <br/><br/><br/>
            <label>Enter your Id</label>
            <br/><br/><br/>
            <textarea onChange={e=>setIdnum(e.target.value)} className="id-txt"/>
            <br/><br/><br/>
            <label>Enter your phone Number</label>
            <br/><br/><br/>
            <textarea onChange={e=>setPhonenum(e.target.value)} className="phone-txt"/>
            <button className="s-sub">Submit</button>
        </form>
    )
}

export default PostSystem