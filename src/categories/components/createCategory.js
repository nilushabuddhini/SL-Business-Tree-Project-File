import { useState } from "react";
import FileBase64 from 'react-file-base64'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CreateCategory(){

    const [category, setCategory] = useState('')
    const [bgImage, setBgImage] = useState('')
    const [value, setValue] = useState('')

    const navigate = useNavigate()

    const convertToBase = (e) => {
        console.log(e)
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setBgImage(reader.result)
        }
        reader.onerror = (error) => {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const categories = {category, bgImage, value}

        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/categories', {
            method:'POST',
            body:JSON.stringify(categories),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(response.ok){
            setCategory('')
            setBgImage('')
            setValue('')
            navigate('/categories')
        }
    }
    return(
        <div className="container mt-5">
            <div className="btn-group mt-5">
            <Link to='/dashboard' className="btn btn-success">Look for orders</Link>
            <Link to='/mine'className="btn btn-secondary">Your Items</Link>
            <Link to='/global' className="btn btn-primary">Post ad</Link>
            <Link className="btn btn-warning" to='/create/category'>Create Category</Link>
            </div>
            <br /><br />
            <form className="text-center" onSubmit={handleSubmit}>
                <label htmlFor="" className="text-center">Enter the name of your category</label>
                <br /><br />
                <input type="text" className="form-control text-center" onChange={e=>setCategory(e.target.value)}/>
                <br /><br /><br />
                <label htmlFor="">Select an image for your category</label>
                <br /><br />
                {/* <FileBase64 multiple={false} onDone={({base64})=>setBgImage(base64)} className='form-control'/> */}
                <input type="file" name="" id="" onChange={convertToBase}/>
                <br /><br /><br />
                <input type="text" className="form-control" placeholder="The searching value for your category, please enter one word only" onChange={e=> setValue(e.target.value)}/>
                <br /><br /><br />
                <button type="submit" className="btn btn-outline-secondary">Create</button>
                <br /><br /><br />
            </form>
        </div>
    )
}