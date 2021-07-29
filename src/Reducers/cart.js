import * as types from "./../Constant/ActionTypes";

var initialState = [];

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
      return result;
    }
  });
  return result;
};

const cart = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.GET_ALL_CART:
      state = [...action.products];
      return [...state];
    case types.ADD_TO_CART:
      state.push(action.product);
      return [...state];
    case types.DELETE_CART:
      index = findIndex(state, action.id);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
