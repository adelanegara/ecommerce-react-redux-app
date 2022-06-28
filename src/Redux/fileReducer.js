const initialState = {
    userCart: [],
  };

export const whitelist = ["userCart"];

export const fileReducer = () => {
  return (
    <div>fileReducer</div>
  )
}

  //action
//   export const fileReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "SET_PRODUCT":
//         return {
//           ...state,
//           isLogin: true,
//         };
//       case "SELECTED_PRODUCT":
//         return {
//           ...state,
//           isLogin: false,
//         };
//       case "UNSELECTED_PRODUCT":
//         return {
//           ...state,
//           userData: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
