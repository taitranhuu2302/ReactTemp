import { Link } from "react-router-dom";

import React, { Component } from "react";

class NavSub extends Component {
  render() {
    var { item } = this.props;
    var html = null;
    if (item.image) {
      html = (
        <li className="drop-item">
          <Link to={item.to}>
            <img src={item.image} alt="" />
          </Link>
          <div className="item-title">{item.label}</div>
        </li>
      );
    } else {
      html = (
        <li className="drop-item">
          <Link to={item.to} className="nav-link">
            {item.label}
          </Link>
        </li>
      );
    }
    return html;
  }
}

export default NavSub;
