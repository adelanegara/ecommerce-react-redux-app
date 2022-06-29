import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { config } from "../../server/config";

const ViewProduct = ({ addChart }) => {
  const [data, setData] = useState();
  const { id } = useParams();
  const fetchData = async () => {
    const productList = await axios.get(`${config.url_products}/${id}`);
    setData(productList.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="">
        {" "}
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
            <div className="form-group pt-3 d-flex align-items-center">
              <button
                type="button"
                className="btn btn-sm btn-dark button-shop"
                onClick={() => addChart(data)}
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

const mapStateToProps = (state) => ({
  userCart: state.userCart,
});

const mapDispatchToProps = (dispatch) => ({
  addChart: (payload) => {
    dispatch({ type: "ADD_CHART", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
