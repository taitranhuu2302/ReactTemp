import * as types from "./../Constant/ActionTypes";
import callApi from "./../utils/apiCaller";

export const acShowSlide = () => {
  return {
    type: types.BANNER_SLIDES,
  };
};

export const navItem = () => {
  return {
    type: types.NAVITEM,
  };
};

export const exploreSlides = () => {
  return {
    type: types.EXPLORE_SLIDES,
  };
};

export const gearSlides = () => {
  return {
    type: types.GEAR_SLIDES,
  };
};

export const onChangeLogin = () => {
  return {
    type: types.CHANGE_LOGIN_SIGNIN,
  };
};

export const acOnRegister = (user) => {
  return {
    type: types.REGISTER,
    user,
  };
};

export const acRegisterRequest = (user) => {
  return (dispatch) => {
    return callApi("users", "POST", user).then((res) => {
      return dispatch(acOnRegister(res.data));
    });
  };
};

export const acOnLogged = (username) => {
  return {
    type: types.LOGGED,
    username,
  };
};

export const acGetUsersRequest = () => {
  return (dispatch) => {
    return callApi("users", "GET", null).then((res) => {
      if (res.data) {
        return dispatch(acGetUsers(res.data));
      }
    });
  };
};

export const acGetUsers = (users) => {
  return {
    type: types.GET_USERS,
    users,
  };
};

// List Products

export const acFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      if (res.data) {
        return dispatch(acFetchProducts(res.data));
      }
    });
  };
};

export const acFetchProducts = (products) => {
  return {
    type: types.PRODUCTS,
    products,
  };
};

export const acUpProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      return dispatch(acUpProducts(res.data));
    });
  };
};

export const acUpProducts = (product) => {
  return {
    type: types.UPPRODUCT,
    product,
  };
};
export const acDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      return dispatch(acDeleteProduct(id));
    });
  };
};

export const acDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const acUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "PUT", product).then((res) => {
      return dispatch(acUpdateProduct(product));
    });
  };
};

export const acUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};

// Cart

export const acGetAllProductCartRequest = () => {
  return (dispatch) => {
    return callApi("carts", "GET", null).then((res) => {
      return dispatch(acGetAllProductCart(res.data));
    });
  };
};

export const acGetAllProductCart = (products) => {
  return {
    type: types.GET_ALL_CART,
    products,
  };
};

export const acAddToCartRequest = (product) => {
  return (dispatch) => {
    return callApi("carts", "POST", product).then((res) => {
      return dispatch(acAddToCart(res.data));
    });
  };
};

export const acAddToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    product,
  };
};

export const acDeleteProductCartRequest = (id) => {
  return (dispatch) => {
    return callApi(`carts/${id}`, "DELETE", null).then((res) => {
      return dispatch(acDeleteProductCart(id));
    });
  };
};

export const acDeleteProductCart = (id) => {
  return {
    type: types.DELETE_CART,
    id,
  };
};

// Login - Register (Admin)

export const acRegisterAdminRequest = (user) => {
  return (dispatch) => {
    return callApi("usersAdmin", "POST", user).then((res) => {
      return dispatch(acRegisterAdmin(res.data));
    });
  };
};

export const acRegisterAdmin = (user) => {
  return {
    type: types.REGISTER,
    user,
  };
};

export const acGetUserAdminRequest = () => {
  return (dispatch) => {
    return callApi("usersAdmin", "GET", null).then((res) => {
      return dispatch(acGetUserAdmin(res.data));
    });
  };
};

export const acGetUserAdmin = (users) => {
  return {
    type: types.GET_USERS_ADMIN,
    users,
  };
};

export const acUpdateUserAdminRequest = (user) => {
  return (dispatch) => {
    return callApi(`usersAdmin/${user.id}`, "PUT", user).then((res) => {
      return dispatch(acUpdateUserAdmin(res.data));
    });
  };
};
export const acUpdateUserAdmin = (user) => {
  return {
    type: types.UPDATE_USER_ADMIN,
    user,
  };
};

export const acUpdateUserRequest = (user) => {
  return (dispatch) => {
    return callApi(`users/${user.id}`, "PUT", user).then((res) => {
      return dispatch(acUpdateUser(res.data));
    });
  };
};
export const acUpdateUser = (user) => {
  return {
    type: types.UPDATE_USER,
    user,
  };
};

export const DeleteUserAdminRequest = (id) => {
  return (dispatch) => {
    return callApi(`usersAdmin/${id}`, "Delete", null).then((res) => {
      return dispatch(DeleteUserAdmin(id));
    });
  };
};
export const DeleteUserAdmin = (id) => {
  return {
    type: types.DELETE_USER_ADMIN,
    id,
  };
};

// Delete Customer

export const DeleteUserRequest = (id) => {
  return (dispatch) => {
    return callApi(`users/${id}`, "Delete", null).then((res) => {
      return dispatch(DeleteUser(id));
    });
  };
};
export const DeleteUser = (id) => {
  return {
    type: types.DELETE_USER,
    id,
  };
};

// WORK

export const getWorkRequest = () => {
  return (dispatch) => {
    return callApi(`works`, "GET", null).then((res) => {
      dispatch(getWork(res.data));
    });
  };
};
export const getWork = (works) => {
  return {
    type: types.GET_WORK,
    works,
  };
};

export const addWorkRequest = (work) => {
  return (dispatch) => {
    return callApi(`works`, "POST", work).then((res) => {
      dispatch(addWork(res.data));
    });
  };
};
export const addWork = (work) => {
  return {
    type: types.ADD_WORK,
    work,
  };
};

export const deleteWorkRequest = (id) => {
  return (dispatch) => {
    return callApi(`works/${id}`, "DELETE", null).then((res) => {
      dispatch(deleteWork(id));
    });
  };
};

export const deleteWork = (id) => {
  return {
    type: types.DELETE_WORK,
    id,
  };
};

export const updateWorkRequest = (work) => {
  return (dispatch) => {
    return callApi(`works/${work.id}`, "PUT", work).then((res) => {
      dispatch(updateWork(work));
    });
  };
};

export const updateWork = (work) => {
  return {
    type: types.UPDATE_WORK,
    work,
  };
};
