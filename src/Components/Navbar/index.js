import React from 'react'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">LOGO </a>

  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>

      </ul>
      
    </div>
  </nav></div>
  )
}

export default Navbar