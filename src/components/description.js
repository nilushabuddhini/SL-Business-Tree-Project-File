import { useState } from 'react'

function DisplayItems({ stores }){

  const [img, setImg] = useState('')

    const handleClick = (e)=>{
        window.location.replace('http://localhost:3000/order')
        localStorage.setItem('order', e.target.id)
        localStorage.setItem('img', e.target.name)
        localStorage.setItem('prc', e.target.value)
        localStorage.setItem('con', e.target.title)
    }
    return(


            <div className="col albumitem">
          <div className="card shadow-sm">
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <img src={stores.image} alt="" className="imgdes"/>
            <div className="card-body">
              <h3 className="card-text">{stores.title}</h3>
              <p className="card-text">{stores.description}</p>
              <h5 className="card-text">{stores.prize} LKR</h5>
              <h6 className="card-text">Contact Now : {stores.phone}</h6>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View more</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleClick} id={stores.image} name={stores.title} value={stores.prize} title={stores.phone}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        

    )
}

export default DisplayItems
