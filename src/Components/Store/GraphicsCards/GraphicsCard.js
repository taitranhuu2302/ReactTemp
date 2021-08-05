import React, { Component } from "react";
import "./styles.scss";
import Category from "./GCCategory/Category";
import BarFilter from "./GCBarFilter/BarFilter";
import TaskBar from "./TaskBar/TaskBar";
import Products from "./Products/Products";
import Gallery from "./Gallery/Gallery";
import Support from "./Support/Support";
import Pagination from "./Pagination/Pagination";
import { connect } from "react-redux";
import * as actions from "./../../../Actions/index";
import Cart from "./Cart/Cart";

class GraphicsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 12,
    };
  }

  componentDidMount() {
    this.props.acProductsRequest();
    this.props.getProductCart();
    this.props.onGetUsers();
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
  };

  onAddToCart = (product) => {
    const { users, history } = this.props;
    const id = JSON.parse(localStorage.getItem("username"));
    if (!id) {
      history.push("/global/login");
      return;
    }
    const index = users.findIndex((user) => user.id === id);
    var carts = users[index].carts || [];
    if (carts.length > 0) {
      if (users[index].carts.some((item) => item.id === product.id)) {
        return;
      }
    }
    carts.push(product);
    var user = {
      id,
      carts,
    };
    this.props.onUpdateUser(user);
  };

  onDeleteCart = (id) => {
    const { users } = this.props;
    const idCurrent = JSON.parse(localStorage.getItem("username"));
    const index = users.findIndex((user) => user.id === idCurrent);
    var carts = users[index].carts || [];
    const indexCart = carts.findIndex((cart) => cart.id === id);
    carts.splice(indexCart, 1);
    var user = {
      id: idCurrent,
      carts,
    };
    this.props.onUpdateUser(user);
  };

  onDeleteAllCart = () => {
    const { users } = this.props;
    const idCurrent = JSON.parse(localStorage.getItem("username"));
    const index = users.findIndex((user) => user.id === idCurrent);
    var carts = users[index].carts || [];
    carts.splice(0);
    var user = {
      id: idCurrent,
      carts,
    };
    this.props.onUpdateUser(user);
  };

  render() {
    var { products, match, users } = this.props;
    const id = JSON.parse(localStorage.getItem("username"));
    const index = users.findIndex((user) => user.id === id);
    var carts = [];
    if (index !== -1) {
      carts = users[index].carts || [];
    }
    const { currentPage, postsPerPage } = this.state;
    products = products.filter((product) => {
      return product.status === true;
    });
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <>
        <div className="container-fluid p-0" id="graphics-card">
          <Category listCard={listCard} />
          <BarFilter taskBar={taskBar} />
          <div className="container-fluid mt-4">
            <div className="container">
              <div className="row">
                <div className="col-xl-2 d-none d-xl-block task-bar">
                  <TaskBar taskBar={taskBar} />
                </div>
                <div className="col-xl-10 col-12" id="product-list">
                  <Products
                    products={currentPosts}
                    onAddToCart={this.onAddToCart}
                    match={match}
                    carts={carts}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={products.length}
                    paginate={this.paginate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="gallery">
          <Gallery />
        </div>
        <div className="container-fluid" id="support">
          <Support />
        </div>
        {carts && carts.length > 0 ? (
          <div className="container-fluid" id="cart">
            <Cart
              cart={carts}
              onDeleteCart={this.onDeleteCart}
              users={this.props.users}
              history={this.props.history}
              onDeleteAllCart={this.onDeleteAllCart}
              onAddToCart={this.props.onAddToCart}
              onAddOrder={this.props.onAddOrder}
            />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

const listCard = [
  {
    to: "/GraphicsCard",
    name: "AORUS",
    image: "https://www.aorus.com/assets/img/graphics-cards-aorus.58760d9d.png",
  },
  {
    to: "/GraphicsCard",
    name: "NVIDIA SERIES",
    image:
      "https://www.aorus.com/assets/img/graphics-cards-nvidia.7025d4f5.png",
  },
  {
    to: "/GraphicsCard",
    name: "AMD SERIES",
    image: "https://www.aorus.com/assets/img/graphics-cards-amd.4c5818ab.png",
  },
];

const taskBar = [
  {
    label: "Category",
    list: [
      {
        name: "AORUS",
        active: true,
      },
      {
        name: "GIGABYTE",
        active: false,
      },
    ],
  },
  {
    label: "NIVIDIA Series",
    list: [
      {
        name: "GeForce® GTX TITAN Z",
        active: false,
      },
      {
        name: " GeForce RTX™ 3090",
        active: false,
      },
      {
        name: "GeForce® GTX 1660 Ti",
        active: false,
      },
    ],
  },
  {
    label: "AMD Series",
    list: [
      {
        name: "Radeon™ RX 6900 XT",
        active: false,
      },
      {
        name: " Radeon™ RX 5700 XT",
        active: false,
      },
      {
        name: "Radeon R9 NANO",
        active: false,
      },
    ],
  },
  {
    label: "Memory",
    list: [
      {
        name: "16GB",
        active: false,
      },
      {
        name: "12GB",
        active: false,
      },
      {
        name: "11GB",
        active: false,
      },
      {
        name: "8GB",
        active: false,
      },
      {
        name: "6GB",
        active: false,
      },
      {
        name: "4GB",
        active: false,
      },
      {
        name: "3GB",
        active: false,
      },
      {
        name: "2GB",
        active: false,
      },
      {
        name: "1GB",
        active: false,
      },
    ],
  },
];

const mapStateToProps = (state) => {
  return {
    products: state.products,
    carts: state.cart,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    acProductsRequest: () => {
      dispatch(actions.acFetchProductsRequest());
    },
    onAddToCart: (user) => {
      dispatch(actions.acAddToCartRequest(user));
    },
    onUpdateUser: (user) => {
      dispatch(actions.acUpdateUserRequest(user));
    },
    getProductCart: () => {
      dispatch(actions.acGetAllProductCartRequest());
    },
    onDeleteCart: (id) => {
      dispatch(actions.acDeleteProductCartRequest(id));
    },
    onGetUsers: () => {
      dispatch(actions.acGetUsersRequest());
    },
    onAddOrder: (order) => {
      dispatch(actions.addOrderRequest(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphicsCard);
