const initialState = {
    userCart: [],
    productSortAsc: []
  };

export const whitelist = ["userCart"];

export const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CHART":
        return {
          ...state,
          userCart: [...state.userCart, action.payload],
        };
      default:
        return state;
    }
  };