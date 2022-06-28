import React from 'react'


const ShopLandingPage = () => {
  return (
<>
<div className="container">
<div className="row">
  <div className="col-3 bg-primary">    <div class="card ">
  <div class="card-body">
    <h5 class="card-title">Sort</h5>
    <ul class="list-group">
  <li class="list-group-item "> Ascending</li>
  <li class="list-group-item">Descending</li>
  <li class="list-group-item">Rates</li>

</ul>
    </div>
</div>
</div>
  <div className="col-9 bg-info">
  <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card ">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <button
    className="btn btn-sm btn-primary mr-1 px-2 ">
      Add Cart </button>  
      <button
    className="btn btn-sm btn-primary mr-1">
      View </button>  
    </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card ">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <button
    className="btn btn-sm btn-primary mr-1 px-2 ">
      Add Cart </button>  
      <button
    className="btn btn-sm btn-primary mr-1">
      View </button>  
    </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card ">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <button
    className="btn btn-sm btn-primary mr-1 px-2 ">
      Add Cart </button>  
      <button
    className="btn btn-sm btn-primary mr-1">
      View </button>  
    </div>
</div>
    </div>
  </div>
</div>

 
  </div>
</div>
</div>
</>
  )
}

export default ShopLandingPage