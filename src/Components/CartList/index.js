import React, { useState } from "react";
import { connect } from "react-redux";
import sumBy from "lodash/sumBy";

const CartList = ({ userCart, updateCart }) => {
  let subTotalPrice = [];
  const handleQty = (id, type) => {
    const myCart = userCart.map((item) => {
      if (item.id === id) {
        if (type === "add") {
          item.quantity += 1;
        } else {
          item.quantity -= 1;
        }
      }
      return item;
    });
    updateCart(myCart);
  };
  return (
    <div className="container">
      <div className="pt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">QTY</th>
              <th scope="col">Sub Total</th>
            </tr>
          </thead>
          {userCart?.map((item, index) => {
            const totalPrice = item.price * item.quantity;
            subTotalPrice.push(totalPrice);
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td> {item.title}</td>
                  <td>$ {item.price} </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleQty(item.id, "add")}
                      >
                        +
                      </button>
                      <div>{item.quantity}</div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleQty(item.id, "sub")}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td>$ {totalPrice}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <div className="pt-5">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Total Items</th>
                <th scope="col">Checkout</th>
              </tr>
            </thead>
            <tbody>
              {userCart && (
                <tr>
                  <th scope="row">1</th>
                  <td>{sumBy(userCart, "quantity")}</td>
                  <td>$ {sumBy(subTotalPrice)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userCart: state.userCart,
});

const mapDispatchToProps = (dispatch) => ({
  updateCart: (payload) => {
    dispatch({ type: "UPDATE_CART", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
