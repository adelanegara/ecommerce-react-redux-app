import React, { useState, useEffect } from "react";
import axios from "axios";
import orderBy from "lodash/orderBy";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { config } from "../../server/config";

//pass the parameter userCart, addChart, updateCart
const ShopLandingPage = ({ userCart, addChart, updateCart }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); //for search func
  //fetch product from baseurl
  const fetchData = async () => {
    const productList = await axios.get(config.url_products);
    setData(productList.data); //update data
    setFilteredData(productList.data); //update product list
  };

  useEffect(() => {
    fetchData();
  }, []);

  //handling sort by type
  const handleSort = (type) => {
    const sortData = orderBy(data, ["title"], [type]);
    setFilteredData(sortData);
  };

  //handling sort by rate: asc/desc
  const handleSortRate = () => {
    const sortData = orderBy(
      data,
      (item) => {
        return [item.rating.rate];
      },
      ["desc"]
    );
    setFilteredData(sortData);
  };

  //hadle new updated cart value
  const handleAddCart = (cart) => {
    const payload = {
      ...cart,
      quantity: 1,
    };
    const checkCart = userCart.find((item) => {
      return item.id === cart.id;
    });
    if (checkCart) {
      const myCart = userCart.map((item) => {
        if (item.id === checkCart.id && item.quantity < item.stocks) {
          item.quantity += 1;
        }
        return item;
      });
      if (checkCart.quantity < checkCart.stocks) {
        updateCart(myCart);
      } else {
        toast.warning("out of stock");
      }
    } else {
      addChart(payload);
    }
  };

  //handling word for search bar
  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.title.toLowerCase().match(new RegExp(searchTerm, "g"));
    });
  };

  //handling search bar
  const handleSearch = async (e) => {
    let value = e.target.value;
    let search = await arraySearch(data, value);
    setFilteredData(search);
  };

  return (
    <>
      <div className="row m-0 ">
        <div className="col-3 ">
          <div className="card border-0 m-5">
            <div className="card-body shadow p-3 mb-5">
              <p className="card-title filter-text">FILTERS</p>
              <input
                className="input form-control my-3"
                type="text"
                placeholder="Search"
                onChange={(e) => handleSearch(e)}
              />
              <ul className="list-group">
                <li
                  className="list-group-item"
                  onClick={() => handleSort("asc")}
                >
                  Sort Ascending
                </li>
                <li
                  className="list-group-item"
                  onClick={() => handleSort("desc")}
                >
                  Sort Descending
                </li>
                <li
                  className="list-group-item"
                  onClick={() => handleSortRate()}
                >
                  Sort Available
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9 ">
          <div className="row mt-5">
            {filteredData?.map((item, index) => {
              return (
                <div className="col-4 " key={index}>
                  <div className="ui link cards">
                    <div className="card shadow-sm p-3 mb-5 bg-white ">
                      <div className="image">
                        <img src={item.image} alt={item.id} />
                      </div>
                      <div className="rate text-center">
                        <p> Rate: {item.rating.rate}</p>
                      </div>
                      <div className="content content-product">
                        <div className="category-text">
                          <span>{item.category} </span>
                        </div>
                        <div className="header">{item.title}</div>

                        <div className="meta price">$ {item.price}</div>
                        <div className="category-text pb-2">
                          <span>{item.stocks} pieces available </span>
                        </div>
                        <div className="form-group d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-sm btn-dark button-shop"
                            onClick={() => handleAddCart(item)}
                          >
                            Add Item
                          </button>
                          <Link
                            to={`/view/${item.id}`}
                            className="btn btn-sm btn-dark button-shop"
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
    </>
  );
};
//redux selector
const mapStateToProps = (state) => ({
  userCart: state.userCart,
});

//redux action
const mapDispatchToProps = (dispatch) => ({
  addChart: (payload) => {
    dispatch({ type: "ADD_CHART", payload });
  },
  updateCart: (payload) => {
    dispatch({ type: "UPDATE_CART", payload });
  },
});

export { ShopLandingPage as ShopLandingPageUnwrapped };
//combine the 2 state (action & selector from redux)
export default connect(mapStateToProps, mapDispatchToProps)(ShopLandingPage);
