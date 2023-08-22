function GlobalThings({ globalitems }){
    return(
        <div className="globedesc">
            <img key={globalitems._id} src={globalitems.image} alt='logo'/>
            <h3 key={globalitems._id}><strong>Product</strong> : <em>{globalitems.title}</em></h3>
            <h3 key={globalitems._id}><strong>prize</strong> : <em>{globalitems.prize} LKR</em></h3>
            <p key={globalitems._id}><em>{globalitems.description}</em></p>
            <h3 key={globalitems._id}><strong>Contact Now</strong> : <em>{globalitems.phone}</em></h3>
            <a href="/order" className="order">Buy Now</a>
        </div>
    )
}

export default GlobalThings