import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import sumBy from "lodash/sumBy";

//pass the parameter userCart
const Navbar = ({ userCart }) => {
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
          <Link to="/cartlist" className="btn btn-outline-dark">
            Cart
            {userCart && (
              <span className="text-danger p-2">
                {sumBy(userCart, "quantity")}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

//redux selector
const mapStateToProps = (state) => ({
  userCart: state.userCart,
});

export default connect(mapStateToProps)(Navbar);
