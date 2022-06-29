import React from "react";
import { connect } from "react-redux";
import sumBy from "lodash/sumBy";

//pass the parameter userCart, updateCart
const CartList = ({ userCart, updateCart }) => {
  let subTotalPrice = [];

  //handle del func
  const handleDelete = (id) => {
    const newCart = userCart.filter((item) => {
      return item.id !== id;
    });
    updateCart(newCart);
  };

  //stock func
  const handleQty = (id, type) => {
    const myCart = userCart.map((item) => {
      if (item.id === id) {
        if (type === "add") {
          item.quantity += 1;
        } else if (type === "sub" && item.quantity > 1) {
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
              <th scope="col">Action</th>
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
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      x
                    </button>
                  </td>
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
                  {/* sum total quantity */}
                  <td>{sumBy(userCart, "quantity")}</td>
                  {/* sum total price */}
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

//redux selector
const mapStateToProps = (state) => ({
  userCart: state.userCart,
});

//redux action
const mapDispatchToProps = (dispatch) => ({
  updateCart: (payload) => {
    dispatch({ type: "UPDATE_CART", payload });
  },
});

//combine the 2 state (action & selector from redux)
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
