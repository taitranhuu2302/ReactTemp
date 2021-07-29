import * as types from "./../Constant/ActionTypes";

var initialState = true;

const changeLogin = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN_SIGNIN:
      return !state;
    default:
      return state;
  }
};

export default changeLogin;
