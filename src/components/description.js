function DisplayItems({ stores }){

    const handleClick = (e)=>{
        window.location.replace('http://localhost:3000/order')
        localStorage.setItem('order', e.target.id)
    }
    return(
        <div className='flex'>
        
            <div className="items">
                <img key={stores._id} src={stores.image} alt='logo'/>
                <h3 key={stores._id}><strong>Product</strong> : <em>{stores.title}</em></h3>
                <h3 key={stores._id}><strong>prize</strong> : <em>{stores.prize} LKR</em></h3>
                <p key={stores._id}><em>{stores.description}</em></p>
                <h3 key={stores._id}><strong>Contact Now</strong> : <em>{stores.phone}</em></h3>
                <input type="text" value={stores._id} id={stores._id} className="id-of-stores"/>
                <br />
                <button className="order" onClick={handleClick} id={stores._id}>Buy Now</button>
                
            </div>
        
        </div>
    )
}

export default DisplayItems