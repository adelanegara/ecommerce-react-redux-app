import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { config } from "../../server/config";

//pass the parameter userCart, addChart, updateCart
const ViewProduct = ({ userCart, addChart, updateCart }) => {
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1); //set quantity
  const { id } = useParams();
  //fetch product from baseurl
  const fetchData = async () => {
    const productList = await axios.get(`${config.url_products}/${id}`);
    setData(productList.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //handle increment
  const addQty = () => {
    setQuantity(quantity + 1);
  };

  //handle minus
  const subQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //handle data update
  const handleAddCart = () => {
    const payload = {
      ...data,
      quantity,
    };
    const checkCart = userCart.find((item) => {
      return item.id === data.id;
    });
    if (checkCart) {
      const myCart = userCart.map((item) => {
        if (item.id === checkCart.id) {
          item.quantity += quantity;
        }
        return item;
      });
      updateCart(myCart);
    } else {
      addChart(payload);
    }
    window.location.replace("/shop");
  };

  return (
    <div className="container">
      <div className="">
        <h5 className="heading-view pt-5 "> DETAIL PRODUCT</h5>
      </div>

      <div className="row row-view ">
        <div className="col-6 ">
          <div classNameName="container">
            <div className="card shadow p-3 mb-5 border-0">
              <div className="card-body px-5">
                <img
                  className="card-img-top"
                  src={data?.image}
                  alt={data?.title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="content content-product shadow-sm  ">
            <div className="product-title">{data?.title}</div>
            <div className="category-text">
              <span>{data?.category} </span>
            </div>

            <div className="pt-4">{data?.description}</div>
            <div className="rate pt-2">
              <p> Rate: {data?.rating.rate}</p>
            </div>

            <div className="price-text">$ {data?.price}</div>
            <div className="d-flex justify-content-between mt-2 bg-light align-items-center">
              <button className="btn btn-primary" onClick={subQty}>
                -
              </button>
              <div>{quantity}</div>
              <button className="btn btn-primary" onClick={addQty}>
                +
              </button>
            </div>
            <div className="form-group pt-3 d-flex align-items-center">
              <button
                type="button"
                className="btn btn-sm btn-dark button-shop"
                onClick={() => handleAddCart()}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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

//combine the 2 state (action & selector from redux)

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
