import * as types from "./../Constant/ActionTypes";

var data = localStorage.getItem("username");

var initialState = data ? data : "";

const logged = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGGED:
      state = action.username;
      localStorage.setItem("username", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default logged;
