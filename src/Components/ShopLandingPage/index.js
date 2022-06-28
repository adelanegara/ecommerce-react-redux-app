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
          <div className="container">
            <div className="row">
              {data?.map((item, index) => {
                return (
                  <>
                    <div className="col-4 mt-4">
                      <div className="ui link cards">
                        <div className="card" key={index}>
                          <div className="image">
                            <img src={item.image} alt={item.id} />
                          </div>
                          <div className="content">
                            <div className="header">{item.title}</div>
                            <div className="meta price">$ {item.price}</div>
                            <div className="meta">{item.category}</div>
                            <div className="form-group d-flex align-items-center justify-content-between ">
                            <button type="button" className="btn btn-sm btn-dark "> Add Item</button>
                            <button type="button" className="btn btn-sm btn-dark "> View</button>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLandingPage;