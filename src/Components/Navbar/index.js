import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-4">
        <a className="navbar-brand" href={"/"}>
          SHOPIFY
        </a>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href={"/"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/about"}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/shop"}>
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <button type="button" class="btn btn-outline-dark">
            Cart{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
