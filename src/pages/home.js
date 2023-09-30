import { useEffect, useState } from "react";
import Items from '../components/description'
import { useItemsContext } from "../hooks/useitemscontext";
import { useAuthContext } from '../hooks/useAuthContext';
import Carousel from '../components/carousel'
import Footer from "../components/footer";
import TopRated from "../top-rated/topRated";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import fashion from '../components/fashion.jpg'
import furniture from '../components/furni.jpg'
import state from '../components/state.jpg'
import electric from '../components/elec.jpg'
import food from '../components/food.jpg'

function Home(){
    const {items, dispatch} = useItemsContext()
    const {user} = useAuthContext() 

    const [loading, setLoading] = useState(true)
    const [elementsInPage, setElementsInPage] = useState(12)

    useEffect(() =>{
      setLoading(true)
      const fetchitems = async ()=>{
        const response = await fetch('https://sl-buisness-tree-backend.onrender.com/api/items')
        const json = await response.json()
  
        if(response.ok){
          dispatch({type: 'SET_ITEMS', payload: json})
        }
        setLoading(false)
      }
        fetchitems()
      
    },[dispatch, user])
    const slice = items.slice(0, elementsInPage)

    const loadMore = () => {
      setElementsInPage(elementsInPage+12)
    }
    return (
        <div>
          <div>
                <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Sl Buisness Tree is a buisness website developed for grow your buisness up. You can place your order for your favourite items and you can add it to your cart. You can comment us on the chat page. Please comment our page and share it with your friends."/>
                <meta name="keywords" content="SL Business Tree"/>
                <meta name="author" content="Sl Business Tree"/>

                <title>SL Business Tree</title>
                </Helmet>
            </div>


            <div className="bg bg-dark">
              <br />
              <div className="d-flex container">
          <Link to='/search' className="form-control text-decoration-none tserch">Search...</Link>
          </div>
          <br /><br />
          </div>

          <Carousel/>

          <h5 className="container font-change" id="top-album">Most popular</h5>
          <TopRated/>
          <h5 className="container font-change"  id="categories-album">Categories</h5>
          <div className="album py-5 bg-body-tertiary">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
        <Link to='/category/fashion'>
          <div class="card bg-light border border-light text-white card-mage" >
          
            <img class="card-img" src={fashion} alt="Card"/>
           
            <div class="card-img-overlay">
              <h5 class="card-title text-dark text-center mt-5">Fashion</h5>
              </div>
              </div>
              </Link>
              <Link to='/category/home'>
              <div class="card bg-light border border-light text-white card-mage">
            <img class="card-img" src={furniture} alt="item"/>
            <div class="card-img-overlay">
              <h5 class="card-title text-dark text-center mt-5">Home decor <br /> Furnitures</h5>
              </div>

          </div>
          </Link>
          <Link to='/category/education'>
          <div class="card bg-light border border-light text-white card-mage">
            <img class="card-img" src={state} alt="Card"/>
            <div class="card-img-overlay"><br /><br />
              <h5 className="card-title text-dark text-xl-left mt-3">School and <br /> Education</h5>
              </div>
              </div>
              </Link>
              <Link to='/category/electrics'>
              <div class="card bg-light border border-light text-white card-mage" >
            <img class="card-img" src={electric} alt="Card"/>
            <div class="card-img-overlay"><br /><br />
              <h5 className="card-title text-dark text-center mt-3">Electrics</h5>
              </div>
              </div>
              </Link>
              <Link to='/category/foods'>
              <div class="card bg-light border border-light text-white card-mage">
            <img class="card-img" src={food} alt="item"/>
            <div class="card-img-overlay">
              <h5 class="card-title text-dark text-center mt-5">Foods</h5>
              </div>

          </div>
          </Link>
          </div>
          <Link className="btn btn-outline-warning" to='/categories'>Load more categories</Link>
          </div> 
          </div>
          <h5 className="container font-change"  id="item-album">All products</h5>
        <div className="album py-5 bg-body-tertiary">
        <p className="text-center">{loading===true?'Loading Items...':null}</p>
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">

          {slice && slice.map((stores)=>(
            <Items key={stores._id} stores={stores}/>
          ))}
        </div>
        </div>
        </div>

        {items.length>elementsInPage===true||items.length?<div className="text-center bg bg-light">
          <button className="btn btn-outline-primary w-30 align-center" onClick={loadMore}>Load more</button>
          <br /><br />
        </div>:''}
        <Footer/> 


        </div>
    );
}

export default Home