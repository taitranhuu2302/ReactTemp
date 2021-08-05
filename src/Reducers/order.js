import * as types from "./../Constant/ActionTypes";

var initialState = [];

const order = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      state.push(action.order);
      return [...state];
    case types.GET_ORDER:
      state = [...action.orders];
      return [...state];
    case types.DELETE_ORDER:
      var id = action.id;
      var index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case types.UPDATE_ORDER:
      const uid = action.order.id;
      const uindex = state.findIndex((item) => item.id === uid);
      state[uindex] = action.order;
      return [...state];
    default:
      return [...state];
  }
};

export default order;
