import React, { useState, useEffect } from "react";
import axios from "axios";
import orderBy from "lodash/orderBy";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { config } from "../../server/config";

const ShopLandingPage = ({ userCart, addChart }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const fetchData = async () => {
    const productList = await axios.get(config.url_products);
    setData(productList.data);
    setFilteredData(productList.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = (type) => {
    const sortData = orderBy(data, ["title"], [type]);
    setData(sortData);
  };

  const handleSortRate = () => {
    const sortData = orderBy(
      data,
      (item) => {
        return [item.rating.rate];
      },
      ["desc"]
    );
    setData(sortData);
  };

  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.title.toLowerCase().match(new RegExp(searchTerm, "g"));
    });
  };

  const handleSearch = async (e) => {
    let value = e.target.value;
    let search = await arraySearch(data, value);
    setFilteredData(search);
  };

  return (
    <>
      <div className="row">
    
        <div className="col-3 bg-primary">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">Sort</h5>
              <input
          className="input m-3"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
              <ul className="list-group">
                <li
                  className="list-group-item"
                  onClick={() => handleSort("asc")}
                >
                  Ascending
                </li>
                <li
                  className="list-group-item"
                  onClick={() => handleSort("desc")}
                >
                  Descending
                </li>
                <li
                  className="list-group-item"
                  onClick={() => handleSortRate()}
                >
                  Rates
                </li>
              </ul>
            </div>
          </div>
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Cart</h5>
              {userCart?.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>
                      {item.title} | {item.price} | {item.quantity}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-9 bg-info">
          <div className="container">
            <div className="row">
              {filteredData?.map((item, index) => {
                let quantity = 1;
                return (
                  <div className="col-4 mt-4" key={index}>
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <img src={item.image} alt={item.id} />
                        </div>
                        <div className="content">
                          <div className="header">{item.title}</div>
                          <div className="meta price">$ {item.price}</div>
                          <div className="meta">
                            <span> Category: {item.category} </span>
                            <span> Rate: {item.rating.rate}</span>
                          </div>
                          <input
                            className="input"
                            type="number"
                            min="1"
                            defaultValue="1"
                            onChange={(e) => (quantity = e.target.value)}
                          />
                          <div className="form-group d-flex align-items-center">
                            <button
                              type="button"
                              className="btn btn-sm btn-dark button-shop"
                              onClick={() => addChart({ ...item, quantity })}
                            >
                              Add Item
                            </button>
                            <Link
                              to={`/view/${item.id}`}
                              className="btn btn-sm btn-dark mr-1"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  userCart: state.userCart,
});

const mapDispatchToProps = (dispatch) => ({
  addChart: (payload) => {
    dispatch({ type: "ADD_CHART", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopLandingPage);