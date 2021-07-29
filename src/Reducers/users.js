import * as types from "./../Constant/ActionTypes";

var initialState = [];

var findIndex = (id, list) => {
  var result = -1;

  list.forEach((item, index) => {
    if (item.id === id) {
      return (result = index);
    }
  });

  return result;
};

const users = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.GET_USERS:
      state = action.users;
      return [...state];
    case types.DELETE_USER:
      index = findIndex(action.id, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case types.REGISTER:
      state.push(action.user);
      return [...state];
    case types.UPDATE_USER:
      index = findIndex(action.user.id, state);
      state[index] = action.user;
      return [...state];
    default:
      return [...state];
  }
};

export default users;
