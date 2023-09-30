import { useState } from "react";

function Items(){

    const [id, setId] = useState(localStorage.getItem('order'))
    const [ti, setTy] = useState(localStorage.getItem('img'))
    const [pr, setPr] = useState(localStorage.getItem('prc'))
    const [con, setCon] = useState(localStorage.getItem('con'))

    return (

      <div class="col m-auto" >
  <div class="card shadow-sm">
    <div class="">
      <img src={id} class="img-fluid rounded-start imgdes" alt="..."/>
    </div>
      <div class="card-body">
        <h5 class="card-title">{ti}</h5>
    <p class="card-text">prize : {pr}</p>
        <p class="card-text"><small class="text-muted">for more details, contact {con}</small></p>
      </div>
    </div>
  </div>

    )
}

export default Items