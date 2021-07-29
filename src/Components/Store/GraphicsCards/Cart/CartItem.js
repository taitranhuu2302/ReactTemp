import React, { Component } from "react";

class CartItem extends Component {
  onDeleteCart = (id) => {
    this.props.onDeleteCart(id);
  };

  render() {
    var { item } = this.props;
    return (
      <div className="slide-item">
        <div className="row box">
          <div className="col-6">
            <img src={item.image} alt="" className="w-100" />
          </div>
          <div className="col-5 caption text-white">{item.name}</div>
          <div className="col-1 p-0">
            <button
              onClick={() => this.onDeleteCart(item.id)}
              className="btn close fal fa-times shadow-none"
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
