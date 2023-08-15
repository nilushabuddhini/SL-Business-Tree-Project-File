function getSystem({ backend }){
    return(
        <div className="sys-get">
            <h3 key={backend._id}><strong>Adress</strong> : <em>{backend.adress}</em></h3>
            <h3 key={backend._id}><strong>Identy Number</strong> : <em>{backend.idnum}</em></h3>
            <h3 key={backend._id}><strong>phone number</strong> : <em>{backend.phonenum}</em></h3>
        </div>
    )
}

export default getSystem