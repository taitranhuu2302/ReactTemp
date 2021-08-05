import React, { Component } from "react";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartItem from "./CartItem";
import Slider from "react-slick";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { SettingsOverscanTwoTone } from "@material-ui/icons";

class Cart extends Component {
  listCart = (cart) => {
    var result = null;

    result = cart.map((item, index) => {
      return (
        <CartItem
          item={item}
          key={index}
          onDeleteCart={this.props.onDeleteCart}
        />
      );
    });
    return result;
  };

  compareProduct = () => {
    const { users, history } = this.props;
    const id = JSON.parse(localStorage.getItem("username"));
    const index = users.findIndex((user) => user.id === id);
    const now = moment().format("L LTS");
    if (index !== -1) {
      const user = {
        ...users[index],
      };
      if (
        !user.firstName ||
        !user.lastName ||
        !user.addressLine1 ||
        !user.city ||
        !user.provice ||
        !user.postCode ||
        !user.phoneNumber
      ) {
        history.push("/membership/shipping-address");
        return;
      }
    }
    var carts = users[index].carts || [];
    var cartsTemp = [...carts];
    var myOrder = {
      userid: users[index].id,
      email: users[index].email,
      id: uuidv4(),
      list: [...cartsTemp],
      created_at: now,
      status: 0,
      // 0 => Đang chờ, 1 => Chấp nhận đơn hàng, -1 => Huỷ đơn hàng
    };
    this.props.onAddOrder(myOrder);
    history.push("/membership/my-products");
    toast.success("You have made a successful purchase!");
    setTimeout(() => {
      this.props.onDeleteAllCart();
    }, 2000);
  };

  render() {
    const settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      speed: 500,
    };
    var { cart } = this.props;
    return (
      <>
        <div className="row d-none d-xl-flex align-items-center cart-xl">
          <div className="col-2 ">
            <div className="compare-title text-white">
              <h2>Compare</h2>
              <div className="amount-product font-family-Ti size-18">
                {cart.length} product(s)
              </div>
            </div>
          </div>
          <div className="col-8">
            <Slider {...settings} className="slide-list">
              {this.listCart(cart)}
            </Slider>
          </div>
          <div className="col-2 text-center">
            <div>
              <Button
                onClick={this.compareProduct}
                className="btn caption-btn mb-4 signup rounded-0 shadow-none"
              >
                COMPARE PRODUCTS
              </Button>
            </div>
            <div>
              <Button
                onClick={() => this.props.onDeleteAllCart()}
                className="btn caption-btn login rounded-0 shadow-none"
              >
                CLEAR ALL
              </Button>
            </div>
          </div>
        </div>
        <div className="row d-flex d-xl-none cart-sm align-items-center">
          <div className="col text-white">{cart.length} product(s)</div>
          <div className="col text-end">
            <Button className="btn btn-compare rounded-0 shadow-none">
              COMPARE PRODUCTS
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
