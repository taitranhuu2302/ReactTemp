import { combineReducers } from "redux";
import slider from "./slider";
import navItem from "./navItem";
import gearSlides from "./gearSlides";
import exploreSlides from "./exploreSlides";
import changeLogin from "./changeLogin";
import logged from "./logged";
import products from "./products";
import users from "./users";
import cart from "./cart";
import usersAdmin from "./usersAdmin";
import works from "./works";
import order from "./order";

const myReducers = combineReducers({
  slider,
  navItem,
  gearSlides,
  exploreSlides,
  changeLogin,
  logged,
  products,
  users,
  cart,
  usersAdmin,
  works,
  order,
});

export default myReducers;
