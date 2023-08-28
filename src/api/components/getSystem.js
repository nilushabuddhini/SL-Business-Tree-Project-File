function getSystem({ backend }){
    return(
        <div className="container mt-5 border border-3 p-5 rounded-3 p-3 mb-2 bg-light text-black text-center">
            <h3 key={backend._id}><strong>Adress</strong> : <em>{backend.adress}</em></h3>
            <h3 key={backend._id}><strong>Identy Number</strong> : <em>{backend.idnum}</em></h3>
            <h3 key={backend._id}><strong>phone number</strong> : <em>{backend.phonenum}</em></h3>
            <h5 key={backend._id}>{backend.order}</h5>
            <img src={backend.img}/>
            <h5>{backend.title}</h5>
            <h6>{backend.phoneOrder}</h6>
        </div>
    )
}

export default getSystem