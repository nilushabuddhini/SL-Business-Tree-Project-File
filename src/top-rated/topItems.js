import { Link } from "react-router-dom"

export function TopItems({ top }){

    const handleClick = (e)=>{
        localStorage.setItem('order', e.target.id)
        localStorage.setItem('img', e.target.name)
        localStorage.setItem('prc', e.target.value)
        localStorage.setItem('con', e.target.title)
    }

    return(

    <div className="col albumitem">
    <div className="card shadow-sm">
      {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
      <img src={top.image} alt="" className="imgdes"/>
      <div className="card-body">
        <h3 className="card-text">{top.title}</h3>
        <p className="card-text">{top.description}</p>
        <h5 className="card-text">{top.prize} LKR</h5>
        <h6 className="card-text">Contact Now : {top.phone}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link to='/cart' className='btn btn-sm btn-outline-primary'><button className='btn btn-sm btn-outline-submit' onClick={handleClick} id={top.image} name={top.title} value={top.prize} title={top.phone}>Add to cart</button></Link>
                  <Link to='/order' className='btn btn-sm btn-outline-primary'><button className='btn btn-sm btn-outline-submit' onClick={handleClick} id={top.image} name={top.title} value={top.prize} title={top.phone}>Buy now</button></Link>
          </div>

        </div>
      </div>
    </div>
  </div>
    )
}