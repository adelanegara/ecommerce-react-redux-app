const initialState = {
    userCart: [],
  };


export const whitelist = ["userCart"];

  //action
  export const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCT":
        return {
          ...state,
          isLogin: true,
        };
      case "SELECTED_PRODUCT":
        return {
          ...state,
          isLogin: false,
        };
      case "UNSELECTED_PRODUCT":
        return {
          ...state,
          userData: action.payload,
        };
    }
    }
  };
