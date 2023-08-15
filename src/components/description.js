function DisplayItems({ stores }){
    return(
        <div className='flex'>
        
        <a href='/order'>
            <button className="items">
                <img key={stores._id} src={stores.image} alt='logo'/>
                <h3 key={stores._id}><strong>Product</strong> : <em>{stores.title}</em></h3>
                <h3 key={stores._id}><strong>prize</strong> : <em>{stores.prize} LKR</em></h3>
                <p key={stores._id}><em>{stores.description}</em></p>
                <h3 key={stores._id}><strong>Contact Now</strong> : <em>{stores.phone}</em></h3>
                <a href="/order" className="order">Buy Now</a>
            </button>
        </a>
        
        </div>
    )
}

export default DisplayItems