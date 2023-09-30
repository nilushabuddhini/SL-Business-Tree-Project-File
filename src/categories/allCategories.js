import { useState, useEffect } from "react";
import DisplayCategories from "./components/displayCat";

export default function AllCategories(){

    const [categ, setCateg] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const federation = async () => {
            setLoading(true)
            const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/categories')
            const json = await response.json()
            if(response.ok){
                setCateg(json)
                localStorage.setItem('catjson', categ)
            }
            setLoading(false)
        }
        federation()
    }, [])

    return(
        <div>
        <h5 className="text-center">Other Categories</h5>
        <p className="text-center">{categ.length} categories found</p>
        <div className="album py-5 bg-body-tertiary" id="items-album">
        <p className="text-center">{loading==true?'Loading all the categories...':null}</p>
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">

          {categ && categ.map((category)=>(
            <DisplayCategories key={category._id} category={category}/>
          ))}
        </div>
        </div>
        </div>
        </div>
    )
}