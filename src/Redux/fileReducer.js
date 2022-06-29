const initialState = {
  userCart: [], //for updating updated product list
  productSortAsc: [], // for sort asc from products
};

export const whitelist = ["userCart"];

//action
export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHART":
      return {
        ...state,
        userCart: [...state.userCart, action.payload],
      };
    case "UPDATE_CART":
      return {
        ...state,
        userCart: action.payload,
      };
    default:
      return state;
  }
};
