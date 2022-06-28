import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../server/config";


const ShopLandingPage = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const productList = await axios.get(config.url_products);
    setData(productList.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-shop">
        <div className="row">
          <div className="col-3 bg-primary">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">Sort</h5>
                <ul className="list-group">
                  <li className="list-group-item "> Ascending</li>
                  <li className="list-group-item">Descending</li>
                  <li className="list-group-item">Rates</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9 bg-info">
            <div className="container col-3">
              <div className="row">
                {data?.map((item, index) => {
                  return (
                    <div className="col-sm " key={index}>
                      <div className="card ">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <img className="img-fluid img-thumbnail"src={item.image} alt={item.id} />
                          <p>{item.price} </p>
                          <button className="btn btn-sm btn-primary mr-1 px-2 ">
                            Add Cart
                          </button>
                          <button className="btn btn-sm btn-primary mr-1">
                            View{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLandingPage;