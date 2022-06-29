import React from "react";
import { connect } from "react-redux";

const CartList = ({ userCart }) => {
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
            return (
              <>
                <tbody>
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td> {item.title}</td>
                    <td>$ {item.price} </td>
                    <td> QTY</td>
                    <td> Sub Total</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
