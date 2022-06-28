import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">LOGO </a>

  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
        </li>
        <li className="nav-item active">
          <a className="nav-link" >Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>

      </ul>
      
    </div>
  </nav></div>
  )
}

export default Navbar