import React, { Component } from "react";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartItem from "./CartItem";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
              <Link
                to="/GraphicsCard"
                className="btn caption-btn mb-4 signup rounded-0 shadow-none"
              >
                COMPARE PRODUCTS
              </Link>
            </div>
            <div>
              <button className="btn caption-btn login rounded-0 shadow-none">
                CLEAR ALL
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex d-xl-none cart-sm align-items-center">
          <div className="col text-white">Compare 3 product(s)</div>
          <div className="col text-end">
            <Link
              to="/GraphicsCard"
              className="btn btn-compare rounded-0 shadow-none"
            >
              COMPARE PRODUCTS
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
