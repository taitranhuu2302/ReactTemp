import * as types from "./../Constant/ActionTypes";

let initialState = [];

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

const works = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.GET_WORK:
      state = [...action.works];
      return [...state];
    case types.ADD_WORK:
      state.push(action.work);
      return [...state];
    case types.DELETE_WORK:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case types.UPDATE_WORK:
      index = findIndex(state, action.work.id);
      if (index !== -1) {
        state[index] = action.work;
      }
      return [...state];
    default:
      return [...state];
  }
};

export default works;
