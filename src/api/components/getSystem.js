function getSystem({ backend }){
    return(
        <div className="col">
            <div className="card shadow-sm">
            <img src={backend.img} style={{ height:'400px'}}/>
            <div className="card-body">
            <h3 key={backend._id}>Adress : <em className="text-secondary">{backend.adress}</em></h3>
            <h3 key={backend._id}>Identy Number : <em className="text-secondary">{backend.idnum}</em></h3>
            <h3 key={backend._id}>phone number : <em className="text-secondary">{backend.phonenum}</em></h3>
            <h5 key={backend._id} className="text-success">{backend.order}</h5>
            <h5 className="text-primary">Order for : {backend.title}</h5>
            <h6 className="text-warning">Seller's phone number : {backend.phoneOrder}</h6>
            <small className="text-danger">Quantity: {backend.quantity}</small>
            </div>
        </div>
        </div>
    )
}

export default getSystem