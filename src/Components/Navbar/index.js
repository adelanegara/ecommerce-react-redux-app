import React, {useState} from 'react'
import logo from "../../Image/logo.png"

const Navbar = ({}) => {
    const [filterData, setFilterData] = useState([]);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = filterData.filter((data) => {
          return data.title.search(value) !== -1;
        });
        setFilterData(result);
        if (value === "") {
          setFilterData();
        }
      };
  return (
    <div className='navbar-light bg-light'>
      <div className='px-1 '>
      <nav className="navbar navbar-expand-lg ">
        <div className='px-5'>
          <h1> ABC SHOP</h1>
        </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <input
            type="text"
            className="form-control mb-2 mt-2"
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
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
          <a className="nav-link" >Cart</a>
        </li>

      </ul>
      
    </div>
  </nav>


      </div>

  </div>
  )
}

export default Navbar