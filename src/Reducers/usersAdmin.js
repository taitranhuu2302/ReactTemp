import * as types from "../Constant/ActionTypes";

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

const usersAdmin = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.REGISTER:
      state.push(action.user);
      return [...state];
    case types.GET_USERS_ADMIN:
      state = [...action.users];
      return [...state];
    case types.DELETE_USER_ADMIN:
      index = findIndex(action.id, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case types.UPDATE_USER_ADMIN:
      index = findIndex(action.user.id, state);
      state[index] = action.user;
      return [...state];
    default:
      return [...state];
  }
};

export default usersAdmin;
