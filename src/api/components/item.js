import { useState } from "react";

function Items(){

    const [id, setId] = useState(localStorage.getItem('order'))
    const [ti, setTy] = useState(localStorage.getItem('img'))
    const [pr, setPr] = useState(localStorage.getItem('prc'))
    const [con, setCon] = useState(localStorage.getItem('con'))

    return (

        <div class="card mb-3 position-relative top-100 start-50 translate-middle" style={{ maxWidth:'540px' }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={id} class="img-fluid rounded-start " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{ti}</h5>
    <p class="card-text">prize : {pr}</p>
        <p class="card-text"><small class="text-muted">for more details, contact {con}</small></p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Items